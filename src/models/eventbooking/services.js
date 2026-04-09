const eventSchema = require("./schema");
const hotelsSchema = require("../hotels/schema"); // ✅ missing import

exports.getEventById = async (reservationId) => {
  try {
    return await eventSchema?.find({ reservationId }); // ✅ fixed query object
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const generateEventId = async (hotelId) => {
  try {
    const hotel = await hotelsSchema?.findById(hotelId);

    const initials = hotel.hotelName
      ?.split(" ")
      ?.map((word) => word?.charAt(0)?.toUpperCase())
      ?.join(""); // ✅ join was missing — was returning array not string

    const count = await eventSchema?.countDocuments({ hotelId });
    const nextNumber = count + 1;

    return `EVT${initials}${nextNumber}`;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

exports.createBooking = async (bookingInput) => {
  try {
    const { eventBookingId: _, ...rest } = bookingInput;
    const eventBookingId = await generateEventId(bookingInput?.hotelId);
    console.log("Generated eventBookingId:", eventBookingId); // ✅ debug log
    const create = await eventSchema?.create({ ...rest, eventBookingId });
    return create ? create.toObject() : null;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
