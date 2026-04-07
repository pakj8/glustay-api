const eventsServices = require("../../models/eventsandactivities/services");

exports.createEvents = async (eventsInput) => {
  try {
    const data = await eventsServices.createEvent(eventsInput);
    return data;
  } catch (error) {
    console.log(error);
    throw new error();
  }
};

exports.getAllEvents = async () => {
  try {
    const data = await eventsServices?.getAll();
    return data;
  } catch (error) {
    console.log(error);
    throw new error();
  }
};

exports.getEventsById = async (eventsId) => {
  try {
    const data = await eventsServices?.getById(eventsId);
    return data;
  } catch (error) {
    console.log(error);
    throw new error();
  }
};

exports.getEventsByHotelId = async (hotelId) => {
  try {
    const data = await eventsServices?.getByHotelId(hotelId);
    return data;
  } catch (error) {
    console.log(error);
    throw new error();
  }
};
