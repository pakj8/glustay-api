const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type webcheckin {
    timeOfArrival: Date
    firstName: String
    lastName: String
    gender: String
    age: String
    countryCode: String
    phoneNumber: String
    email: String
    residingCountry: String
    stayedWithUs: Boolean
    governmentIdProof: String
    uploadedProofUrl: String
  }

  input WebCheckInInput {
    timeOfArrival: Date
    firstName: String
    lastName: String
    gender: String
    age: String
    countryCode: String
    phoneNumber: String
    email: String
    residingCountry: String
    stayedWithUs: Boolean
    governmentIdProof: String
    uploadedProofUrl: String
  }

  type Mutation {
    createWebCheckInData(WebCheckInInput: WebCheckInInput): webcheckin
  }
`;

module.exports = typeDefs;
