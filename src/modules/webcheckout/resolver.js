const checkoutController = require("./controller");

const resolver = {
  Query: {
    async getCheckoutDetailsByReservationId(_, { reservationId }) {
      const data = await checkoutController?.getCheckoutDetailsByReservationId(
        reservationId
      );
      return !!data;
    },
    async getAllWebCheckout(_) {
      return await checkoutController?.getAllWebCheckout();
    },
  },
  Mutation: {
    async createWebCheckout(_, { InputCheckout }) {
      return await checkoutController?.createWebCheckout(InputCheckout);
    },
  },
};

module.exports = resolver;
