const eventBookingService = require("../../models/eventbooking/services");

exports.getEventsBookingByReservationId = async (reservationId) => {
  try {
    const data = await eventBookingService?.getEventById(reservationId);
    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

exports.createEventBooking = async (bookingInput) => {
  try {
    return await eventBookingService?.createBooking(bookingInput);
  } catch (error) {
    console.log(error);
    throw new error();
  }
};

exports.getEventCount = async (eventId) => {
  try {
    return await eventBookingService?.getCount(eventId);
  } catch (error) {
    console.error(error);
  }
};
