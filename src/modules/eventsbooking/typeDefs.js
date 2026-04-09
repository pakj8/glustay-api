const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type EventBooking {
    _id: ID
    eventId: ID
    bookingId: ID
    hotelId: ID
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    numberOfGuests: String
    totalAmount: String
    reservationId: String
    eventBookingId: String
  }

  input eventBookingInput {
    eventId: ID
    bookingId: ID
    hotelId: ID
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    numberOfGuests: String
    totalAmount: String
    reservationId: String
  }

  type Query {
    getEventsBookingByReservationId(reservationId: String): [EventBooking]
  }

  type Mutation {
    createEventBooking(bookingInput: eventBookingInput): EventBooking
  }
`;

module.exports = typeDefs;
