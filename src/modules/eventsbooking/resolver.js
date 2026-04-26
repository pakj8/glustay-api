const eventBookingController = require("./controller");

const resolver = {
  Query: {
    async getEventsBookingByReservationId(_, { reservationId }) {
      return await eventBookingController?.getEventsBookingByReservationId(
        reservationId
      );
    },
    async getEventBookingCount(_, { eventId }) {
      return await eventBookingController?.getEventCount(eventId);
    },
  },
  Mutation: {
    async createEventBooking(_, { bookingInput }) {
      return eventBookingController?.createEventBooking(bookingInput);
    },
  },
};

module.exports = resolver;
