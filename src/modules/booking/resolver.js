const bookingController = require("./controller");
const otpService = require("../../models/booking/services");

const resolver = {
  Query: {
    async getBookingDetailsByReservationId(_, { reservationId }) {
      return await bookingController?.getBookingDetailsByReservationId(
        reservationId
      );
    },
  },
  Mutation: {
    async createUserBooking(_, { bookingInput }) {
      return await bookingController?.createUserBooking(bookingInput);
    },
    async sendOtp(_, { email }) {
      return await otpService.sendOtp(email);
    },
    async verifyOTP(_, { email, otp }) {
      return await otpService?.verifyOTP(email, otp);
    },
  },
};

module.exports = resolver;
