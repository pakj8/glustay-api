const bookingSchema = require("./schema");
const hotelsSchema = require("../hotels/schema");

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

const generateReservationId = async (hotelId) => {
  try {
    const hotel = await hotelsSchema?.findById(hotelId);
    // if (hotel) {
    //   throw new Error("Hotel not found");
    // }

    const initials = hotel.hotelName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");

    const count = await bookingSchema?.countDocuments({ hotelId });
    const nextNumber = count + 1;

    return `RES${initials}${nextNumber}`;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

exports.createBooking = async (bookingInput) => {
  try {
    const { reservationId: _, ...rest } = bookingInput;
    const reservationId = await generateReservationId(bookingInput.hotelId);
    const create = await bookingSchema?.create({ ...rest, reservationId });
    return create ? create.toObject() : null;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
