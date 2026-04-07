const eventsSchema = require("./schema");

exports.createEvent = async (eventsInput) => {
  try {
    const data = await eventsSchema?.create(eventsInput);
    return data;
  } catch (error) {
    console.log(error);
    throw new error();
  }
};

exports.getAll = async () => {
  try {
    const data = await eventsSchema?.find();
    return data;
  } catch (error) {
    console.log(error);
    throw new error();
  }
};

exports.getById = async (eventsId) => {
  try {
    const data = await eventsSchema
      ?.findById(eventsId)
      ?.populate("hotelId", "hotelName");
    return data;
  } catch (error) {
    console.log(error);
    throw new error();
  }
};

exports.getByHotelId = async (hotelId) => {
  try {
    const data = await eventsSchema
      ?.find({ hotelId })
      ?.populate("hotelId", "_id hotelName");
    return data;
  } catch (error) {
    console.log(error);
    throw new error();
  }
};
