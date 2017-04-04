var {graphql, buildSchema} = require('graphql');
var express = require('express');
var graphqlHTTP = require('express-graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    nama: String
    program: String
    todo: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  nama: () => {
    return 'Aristyo Hadikusuma';
  },
  program: () => {
    return 'Javascript';
  },
  todo: () => {
    return 'i do tryout01';
  },
};

var app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, '0.0.0.0');

console.log('Running a GraphQL API server at localhost:4000/graphql');
