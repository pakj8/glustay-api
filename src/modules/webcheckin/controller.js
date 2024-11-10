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
