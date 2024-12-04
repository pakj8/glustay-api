const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type hotel {
    _id: ID
    hotelName: String
  }

  type Webcheckout {
    _id: ID
    fullName: String
    email: String
    phoneNumber: String
    timings: String
    reservationId: String
    hotelId: hotel
    createdAt: Date
    updatedAt: Date
  }

  input InputCheckout {
    fullName: String
    email: String
    phoneNumber: String
    timings: String
    reservationId: String
    hotelId: ID
  }

  type Query {
    getCheckoutDetailsByReservationId(reservationId: ID): Boolean
    getAllWebCheckout: [Webcheckout]
  }

  type Mutation {
    createWebCheckout(InputCheckout: InputCheckout): Webcheckout
  }
`;

module.exports = typeDefs;
