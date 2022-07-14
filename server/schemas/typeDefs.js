const { gql } = require("apollo-server-express");

//_id is auto generated mongo
// token may need to be changed from ID to String
const typeDefs = gql`
  type Query {
    me: User
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: ID
    #an array of strings
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Auth {
    token: ID
    user: User
  }
  #changed user to loginUser to use in mutations.js client side
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SaveBook ) 
    removeBook(bookId: ID!): User
  }
  input SaveBook {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
`;

module.exports = typeDefs;