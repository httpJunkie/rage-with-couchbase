# React, Apollo, GraphQL, and Express Project

In this project we have two sepereate npm projects:

- An Express/GraphQL Server with Couchbase Server datastore
- A React application using Apollo to connect to the GraphQL Server

Requires basic setup of Couchbase Server and a sample database, find instructions for that here:

[Creating a Couchbase GraphQL Server and More!](https://www.reactstateofmind.com/couchbase-graphql)

Once this repo is cloned, cd into each project and run `npm start` or `yarn start`. Ensure Couchbase Server is setup locally and the credentials in the Express `server.js` file are up to date with your user and pass from Couchbase Server.

[Project Preview](https://imgur.com/rXxRC4d.gif)