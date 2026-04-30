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
    async getEventBookingDetailsByEventBookingId(_, { eventBookingId }) {
      return await eventBookingController?.getEventByEventBookingId(
        eventBookingId
      );
    },
    async getAllEventBookings(_) {
      return await eventBookingController?.getAllEventBookings();
    },
  },
  Mutation: {
    async createEventBooking(_, { bookingInput }) {
      return eventBookingController?.createEventBooking(bookingInput);
    },
  },
};

module.exports = resolver;
