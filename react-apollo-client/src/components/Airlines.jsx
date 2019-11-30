import React from 'react'
import { Link } from "react-router-dom"
import { Column, Row } from "simple-flexbox"
import { useQuery } from '@apollo/react-hooks'

import { airlineGql } from './airline'

import withApolloProvider from './withApolloProvider'

import AirlineList from './AirlineList'
import AirlineDetails from './AirlineDetails'

const Airlines = ({ baseUrl, match }) => {
  const airlineId = Number(match.params.id)
  const { loading, error, data } = useQuery(airlineGql)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :( <span style={{color: 'red'}}>{error.message}</span> )</p>

  const airlines = data.airlinesUK
  const airline = match.params.id ? airlines.find(a => a.id === airlineId) : null

  return (
    <>
      <Link className='menu' to={`/airlines`}>
        <h1>UK Airlines</h1>
      </Link>
      <Row horizontal="spaced">
        <Column flexGrow={1} style={{ minWidth: '280px', width: '65%' }}>
          <AirlineList airlines={airlines} />
        </Column>
        <Column flexGrow={1} style={{ width: '45%' }}>
          <AirlineDetails airline={airline} />
        </Column>
      </Row>
    </>
  )
}

const WrappedComponent = withApolloProvider(Airlines, 'http://localhost:4000/graphql')

export default WrappedComponent
