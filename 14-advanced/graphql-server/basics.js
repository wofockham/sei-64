const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Schema: what kind of requests can be made
const schema = buildSchema(`
    type Query {
        message: String,
        luckyNumber: Float
    }
`);

// Resolver: gets the data requested
const root = {
    message: () => 'Hello World', // implicit return
    luckyNumber: () => Math.random()
};

// Join them together and start the server
const server = express();
server.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true // include a little interactive test page
}));

server.listen(4000, () => console.log('http://localhost:4000/graphql'));
