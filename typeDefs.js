const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Task {
    id: ID
    title: String
    description: String
  }
  type Query {
    hello: String
    getAllTasks: [Task]
    getTask(id: ID): Task
  }
  # //creo un input para pasar solo ese input como parametro
  input TaskInput {
    title: String
    description: String
  }
  type Mutation {
    createTask(task: TaskInput!): Task
    #con signo de admiracion se hace obligatorio el campo
    deleteTaks(id: ID!): String
    updateTaks(id: ID!, task: TaskInput): Task
  }
`;
module.exports = { typeDefs };
