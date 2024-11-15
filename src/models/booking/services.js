const bookingSchema = require("./schema");

exports.getByResID = async (reservationId) => {
  try {
    const booking = await bookingSchema
      ?.findOne({ reservationId })
      ?.populate("hotelId", "hotelName address wifiPassword gmapurl");
    return booking ? booking.toObject() : null;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

exports.createBooking = async (bookingInput) => {
  try {
    const create = await bookingSchema?.create(bookingInput);
    return create ? create.toObject() : null;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
