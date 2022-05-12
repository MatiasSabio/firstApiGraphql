require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const { connectDB } = require('./db');

// const { DB_URL } = process.env.DB_URL;
const app = express();
connectDB();

app.get('/', (req, res) => res.send('Welcome to my api'));

module.exports = app;

async function start() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });

  app.get('*', (req, res) => res.send('NotFound'));
  app.listen(3000, () => {
    console.log('Server on port', 3000);
  });
}
start();
