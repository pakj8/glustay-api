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
    email: String
    phoneNumber: String
    reservationId: String
    checkinDate: Date
    checkOutDate: Date
    hotelId: hotel
  }

  type OTPResponse {
    success: Boolean
    message: String
  }

  input bookingInput {
    hotelId: ID
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    checkinDate: Date
    checkOutDate: Date
  }

  type Query {
    getBookingDetailsByReservationId(reservationId: ID): Booking
  }

  type Mutation {
    createUserBooking(bookingInput: bookingInput): Booking
    sendOtp(email: String): OTPResponse
    verifyOTP(email: String, otp: String): OTPResponse
  }
`;

module.exports = typeDefs;
