const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type hotel {
    _id: ID
    name: String
    address: String
    gmapurl: String
    importantInfo: String
    wifiPassword: String
  }

  type Booking {
    _id: ID
    firstName: String
    lastName: String
    reservationId: String
    checkinDate: Date
    checkOutDate: Date
    hotelId: hotel
  }

  input bookingInput {
    hotelId: ID
    firstName: String
    lastName: String
    reservationId: String
    checkinDate: Date
    checkOutDate: Date
  }

  type Query {
    getBookingDetailsByReservationId(reservationId: ID): Booking
  }

  type Mutation {
    createUserBooking(bookingInput: bookingInput): Booking
  }
`;

module.exports = typeDefs;
