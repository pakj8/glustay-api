const webcheckInController = require("./controller");

const resolver = {
  Query: {
    async getGuestDetailsByReservationId(_, { reservationId }) {
      return await webcheckInController?.getGuestDetailsByReservationId(
        reservationId
      );
    },
    async getAllWebCheckInData(_) {
      return await webcheckInController?.getAllWebCheckInData();
    },
  },
  Mutation: {
    async createWebCheckInData(_, { WebCheckInInput }) {
      return await webcheckInController?.createWebCheckInData(WebCheckInInput);
    },
  },
};

module.exports = resolver;
