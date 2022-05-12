// const { ApolloServer } = require('apollo-server');

// const { gql } = require('apollo-server');

// const persons = [
//   {
//     name: 'a',
//     phone: '0123',
//     street: 'b',
//     city: 'c',
//     id: 'cas123',
//   },
//   {
//     name: 'b',
//     phone: '01234',
//     street: 'bb',
//     city: 'cb',
//     id: 'cas123b',
//   },
// ];

// const typeDefs = gql`
//   type Person {
//     name: String!
//     phone: String
//     street: String!
//     city: String!
//     id: ID!
//   }
//   type Query {
//     personCount: Int!
//     allPersons: [Person]!
//   }
// `;
// const resolvers = {
//   Query: {
//     personCount: () => persons.length,
//     allPersons: () => persons,
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });
// server.listen().then(({ url }) => {
//   console.log(`serve ${url}`);
// });
const { connect } = require('mongoose');
require('dotenv').config();

const { DB_URL } = process.env;
const connectDB = async () => {
  try {
    await connect(DB_URL);
    console.log('MongoDb connected');
  } catch (error) {
    console.error(error);
  }
};
module.exports = { connectDB };
