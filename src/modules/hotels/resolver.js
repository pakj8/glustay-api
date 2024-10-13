const hotelControoler = require("./controller");

const resolvers = {
  Query: {
    async getHotelById(_, { hotelId }) {
      return await hotelControoler?.getHotelById(hotelId);
    },
    async getAllHotel(_) {
      return await hotelControoler?.getAllHotel();
    },
  },
  Mutation: {
    async createHotel(_, { hotelInput }) {
      await hotelControoler.createHotel(hotelInput);
    },
  },
};

module.exports = resolvers;
