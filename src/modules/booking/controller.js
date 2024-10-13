const bookingServices = require("../../models/booking/services");

exports.getBookingDetailsByReservationId = async (reservationId) => {
  try {
    const booking = await bookingServices.getByResID(reservationId);
    return booking;
  } catch (error) {
    console.error(error);
    throw new Error(error); // Fixed: Use Error constructor
  }
};

exports.createUserBooking = async (bookingInput) => {
  try {
    const bookingData = await bookingServices.createBooking(bookingInput);
    return bookingData;
  } catch (error) {
    console.error(error);
    throw new Error(error); // Fixed: Use Error constructor
  }
};
