const webcheckinServices = require("../../models/webcheckin/services");

exports.createWebCheckInData = async (WebCheckInInput) => {
  try {
    const createWebcheckin = await webcheckinServices?.createWebCheckIn(
      WebCheckInInput
    );
    return createWebcheckin;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.getGuestDetailsByReservationId = async (reservationId) => {
  try {
    const data = await webcheckinServices?.guestDetails(reservationId);
    return data;
  } catch (error) {
    console.error(error);
  }
};

exports.getAllWebCheckInData = async () => {
  try {
    const data = await webcheckinServices?.getAll();
    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};
