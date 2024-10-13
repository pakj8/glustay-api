const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Upload

  type File {
    url: String
    public_id: String
  }

  type Mutation {
    uploadImage(file: Upload): File
  }
`;

module.exports = typeDefs;
