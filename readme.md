# React, Apollo, GraphQL, and Express Project

In this repo we have two sepereate projects:

## couchbase-gql-server

- An Express/GraphQL Server with Couchbase Server for data storage

## react-apollo-cleint

- A React app using Apollo Client to connect to a GraphQL server

## Setup Couchbase Server and Data Bucket Locally

We want to setup Couchbase Server locally, install the `travel-sample` bucket and setup in the security section of Couchbase Server a user and pass for connecting to our `travel-sample` database. Full instructions on all of that can be found here:
[Creating a Couchbase GraphQL Server and More!](https://www.reactstateofmind.com/couchbase-graphql)

## RUnning the Applications

Once Couchbase Server is setup and working with the `travel-sample` bucket, we can run each project with follow these steps:

1. Inside the `couchbase-gql-server` directory, create a file named: `.env` and inside of it, store your username and password:

## `.env`
```
CBSU=myusername
CBSP=mypassword
```

2. In the terminal, change directory (cd) into `couchbase-gql-server` and run `npm start`

At this point you will be able to test your GraphQL server at: [localhost:4000/graphql](http://localhost:4000/graphql)

3. finally, cd into `react-apollo-client` and run `npm start`

At this point you will be able to test your React application at: [localhost:3000/](http://localhost:3000/)

![Project Preview](https://imgur.com/rXxRC4d.gif)