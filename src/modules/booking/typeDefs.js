const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type hotel {
    _id: ID
    name: String
  }

  type Booking {
    _id: ID
    firstName: String
    lastName: String
    reservationId: String
    checkinDate: String
    checkOutDate: String
    hotelId: hotel
  }

  input bookingInput {
    hotelId: ID
    firstName: String
    lastName: String
    reservationId: String
    checkinDate: String
    checkOutDate: String
  }

  type Query {
    getBookingDetailsByReservationId(reservationId: ID): Booking
  }

  type Mutation {
    createUserBooking(bookingInput: bookingInput): Booking
  }
`;

module.exports = typeDefs;
