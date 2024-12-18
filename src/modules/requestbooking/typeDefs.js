const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Hotel {
    _id: ID
    hotelName: String
  }

  type Request {
    requestTitle: String
    description: String
    message: String
    category: String
  }

  type RequestBooking {
    _id: ID
    guestFirstName: String
    guestLastName: String
    reservationId: String
    hotelId: Hotel
    request: [Request]
    status: String
    createdAt: Date
    reqUniqueId: String
    updatedAt: Date
  }

  input IndividualRequestInput {
    requestTitle: String
    description: String
    message: String
    category: String
  }

  input RequestInput {
    guestFirstName: String
    guestLastName: String
    reservationId: String
    hotelId: ID
    request: [IndividualRequestInput]
  }

  type Query {
    getRequestBooking: [RequestBooking]
    getRequestBookingByObjectId(ObjectId: ID): RequestBooking
    getRequestBookingByReservationId(reservationId: ID): [RequestBooking]
  }

  type Mutation {
    createRequestBooking(RequestInput: RequestInput): RequestBooking
    updateStatus(objectId: ID, status: String): RequestBooking
  }
`;

module.exports = typeDefs;
