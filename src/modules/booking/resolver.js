const bookingController = require("./controller");

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
  },
};

module.exports = resolver;
