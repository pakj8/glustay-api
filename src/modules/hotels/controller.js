const hotelServices = require("../../models/hotels/services");

exports.createHotel = async (hotelInput) => {
  try {
    const data = await hotelServices.createHotel(hotelInput);
    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

exports.getHotelById = async (hotelId) => {
  try {
    const data = await hotelServices?.getById(hotelId);
    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

exports.getAllHotel = async () => {
  try {
    const data = await hotelServices?.getAll();
    return data;
  } catch (error) {
    console.error(error);
  }
};
