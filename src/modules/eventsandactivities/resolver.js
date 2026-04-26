const eventsController = require("./controller");

const resolver = {
  Query: {
    async getAllEvents(_) {
      return await eventsController?.getAllEvents();
    },
    async getEventsById(_, { eventsId }) {
      return await eventsController?.getEventsById(eventsId);
    },
    async getEventsByHotelId(_, { hotelId }) {
      return await eventsController?.getEventsByHotelId(hotelId);
    },
  },
  Mutation: {
    async createEvents(_, { eventsInput }) {
      return await eventsController?.createEvents(eventsInput);
    },
    async updateEvent(_, { _id, eventsInput }) {
      return await eventsController?.updateEvent(_id, eventsInput);
    },
  },
};

module.exports = resolver;
