const requestBookingController = require("./controller");

const resolver = {
  Query: {
    async getRequestBookingByObjectId(_, { ObjectId }) {
      return await requestBookingController?.getRequestBookingByObjectId(
        ObjectId
      );
    },
    async getRequestBooking(_) {
      return await requestBookingController?.getRequestBooking();
    },
    async getRequestBookingByReservationId(_, { reservationId }) {
      return await requestBookingController?.getRequestBookingByReservationId(
        reservationId
      );
    },
  },
  Mutation: {
    async createRequestBooking(_, { RequestInput }) {
      return await requestBookingController.createRequestBooking(RequestInput);
    },
    async updateStatus(_, { objectId, status }) {
      return await requestBookingController?.updateStatus(objectId, status);
    },
  },
};

module.exports = resolver;
