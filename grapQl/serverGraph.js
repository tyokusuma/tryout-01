var { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    name: String,
    program: String
    todo: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  name: () => {
    return 'Aristyo Hadikusuma';
  },
  program: () => {
    return 'Javascript';
  },
  todo: () => {
    return 'i do tryout01';
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ name,program,todo }', root).then((response) => {
  console.log(response);
});
