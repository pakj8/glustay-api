const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type webcheckin {
    _id: ID
    timeOfArrival: String
    firstName: String
    lastName: String
    gender: String
    reservationId: String
    age: String
    countryCode: String
    phoneNumber: String
    email: String
    residingCountry: String
    governmentIdProof: String
    createdAt: Date
    updatedAt: Date
  }

  input WebCheckInInput {
    timeOfArrival: String
    firstName: String
    lastName: String
    reservationId: String
    gender: String
    age: String
    countryCode: String
    phoneNumber: String
    email: String
    residingCountry: String
    governmentIdProof: String
  }

  type Query {
    getAllWebCheckInData: [webcheckin]
    getGuestDetailsByReservationId(reservationId: String): [webcheckin]
  }

  type Mutation {
    createWebCheckInData(WebCheckInInput: WebCheckInInput): webcheckin
  }
`;

module.exports = typeDefs;
