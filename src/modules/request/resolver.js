const requestController = require("./controller");

const resolver = {
  Query: {
    async getRequestByHotelId(_, { hotelId }) {
      return await requestController?.getRequestByHotelId(hotelId);
    },
    async getAllRequest(_) {
      return await requestController?.getAllRequest();
    },
  },
  Mutation: {
    async createRequest(_, { requestInput }) {
      return await requestController?.createRequest(requestInput);
    },

    async updateRequestHotelId(_, { updateRequestHotelIdInput }) {
      return await requestController?.updateRequestHotelId(
        updateRequestHotelIdInput
      );
    },
  },
};

module.exports = resolver;
