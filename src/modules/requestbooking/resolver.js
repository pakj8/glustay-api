const requestBookingController = require("./controller");

const resolver = {
  Query: {
    async getRequestBookingByObjectId(_, { ObjectId }) {
      return await requestBookingController?.getRequestBookingByObjectId(
        ObjectId
      );
    },
  },
  Mutation: {
    async createRequestBooking(_, { RequestInput }) {
      return await requestBookingController.createRequestBooking(RequestInput);
    },
  },
};

module.exports = resolver;
