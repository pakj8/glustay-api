const aiServices = require("../../models/glustayai/services");

const resolver = {
  Mutation: {
    async gluChat(
      _,
      {
        messages,
        guestName,
        hotelName,
        reservationId,
        hotelAddress,
        wifiPassword,
      }
    ) {
      // ✅ add hotelAddress and wifiPassword here
      return await aiServices.gluChat({
        messages,
        guestName,
        hotelName,
        reservationId,
        hotelAddress,
        wifiPassword,
      });
    },
  },
};

module.exports = resolver;
