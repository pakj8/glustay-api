const eventBookingController = require("./controller");

const resolver = {
  Query: {
    async getEventsBookingByReservationId(_, { reservationId }) {
      return await eventBookingController?.getEventsBookingByReservationId(
        reservationId
      );
    },
  },
  Mutation: {
    async createEventBooking(_, { bookingInput }) {
      return eventBookingController?.createEventBooking(bookingInput);
    },
  },
};

module.exports = resolver;
