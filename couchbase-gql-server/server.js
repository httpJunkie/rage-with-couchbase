require('dotenv').config()
const { CB_USER, CB_PASS, CB_BUCKET, CB_URL, CB_SSL } = process.env

const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const couchbase = require('couchbase')
const uuid = require('uuid')
const cors = require('cors')

const app = express()

const run = async () => {
  const scheme = `couchbase${CB_SSL === 'true' ? 's' : ''}://`
  const url = CB_URL
  const queryString = (CB_SSL === 'true') 
    ? '?ssl=no_verify' 
    : ''
  const connectionString = scheme + url + queryString

  try {
    const cluster = await couchbase.connect(
      connectionString,
      { username: CB_USER, password: CB_PASS }
    )
    const bucket = cluster.bucket(CB_BUCKET)
    const collection = bucket.defaultCollection()

    const schema = buildSchema(`
    type Query {
      airlinesUK: [Airline],
      airlineByKey(id: Int!): Airline,
      airportsUK: [Airport]
    }
    type Airline {
      id: Int,
      callsign: String,
      country: String,
      iata: String,
      icao: String,
      name: String
    }
    type Airport {
      id: Int,
      name: String,
      country: String,
      icao: String,
      tz: String
    }
  `)

    const root = {
      airlinesUK: async() => {
        let statement = `
        SELECT META(airline).id, airline.* 
        FROM \`travel-sample\` AS airline 
        WHERE airline.type = 'airline' 
        AND airline.country = 'United Kingdom' 
        ORDER BY airline.name ASC;
      `
      let queryResult = await cluster.query(statement)
      return queryResult.rows
      },
      airlineByKey: async(data) => {
        let key = "airline_" + data.id
        let queryResult = await collection.get(key)
        return queryResult.value
      },
      airportsUK: async() => {
        let statement =
          "SELECT airport.id, airport.airportname as name, airport.country, airport.icao, airport.tz " +
          "FROM `travel-sample` AS airport " +
          "WHERE airport.type = 'airport' " +
          "AND airport.country = 'United Kingdom' " +
          "ORDER BY airport.airportname ASC"
          let queryResult = await cluster.query(statement)
          return queryResult.rows
      },
    }

    const serverPort = 4000
    const serverUrl = '/graphql'

    app.use(cors())
    app.use(serverUrl, graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true
    }))

    app.listen(serverPort, () => {
      let message = `GraphQL server now running on http://localhost:${serverPort}${serverUrl}`
      console.log(message)
    })
  } catch (e) {
    console.log(e)
  }
}

run()

/*
  couchbase running on http://localhost:8091/
*/

/*

  query getAirlinesUK{
    airlinesUK {
      id
      name
      callsign
      country
      iata
      icao
    }
  }

*/

/*

  query getAirlineByKey($id: Int!) {
    airlineByKey(id:$id){
      id
      name
      callsign
      country
      iata
      icao
    }
  }

  {
    "id": 112
  }

*/

/*

  query getAirportsUK{
    airportsUK {
      id
      name
      country
      icao
      tz
    }
  }

*/