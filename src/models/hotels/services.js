const hotelSchema = require("./schema");

exports.createHotel = async (hotelInput) => {
  try {
    const data = await hotelSchema.create(hotelInput);
    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

exports.getById = async (hotelId) => {
  try {
    const hotel = await hotelSchema?.findById(hotelId);
    return hotel;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

exports.getAll = async () => {
  try {
    const all = await hotelSchema?.find();
    return all;
  } catch (error) {
    console.error(error);
  }
};
