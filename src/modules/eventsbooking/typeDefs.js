const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type EventId {
    _id: ID
    name: String
    date: Date
    time: String
  }

  type EventBooking {
    _id: ID
    eventId: EventId
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
    createdAt: Date
    updatedAt: Date
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
    getEventBookingCount(eventId: ID): Int
  }

  type Mutation {
    createEventBooking(bookingInput: eventBookingInput): EventBooking
  }
`;

module.exports = typeDefs;
