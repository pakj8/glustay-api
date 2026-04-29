const eventSchema = require("./schema");
const hotelsSchema = require("../hotels/schema"); // ✅ missing import

exports.getEventById = async (reservationId) => {
  try {
    return await eventSchema
      ?.find({ reservationId })
      .populate("eventId", "name date time");
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
    const create = await eventSchema?.create({ ...rest, eventBookingId });
    return create ? create.toObject() : null;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

exports.getCount = async (eventId) => {
  try {
    const bookings = await eventSchema?.find({ eventId });

    // ✅ Sum all numberOfGuests
    const totalGuests = bookings?.reduce((acc, booking) => {
      return acc + parseInt(booking?.numberOfGuests || 0);
    }, 0);

    return totalGuests;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

exports.eventBookingDetails = async (eventBookingId) => {
  try {
    return await eventSchema
      ?.findOne({ eventBookingId })
      .populate("eventId", "name date time");
  } catch (error) {
    console.error(error);
  }
};
