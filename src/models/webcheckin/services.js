const webcheckInSchema = require("./schema");

exports.createWebCheckIn = async (WebCheckInInput) => {
  try {
    const data = await webcheckInSchema?.create(WebCheckInInput);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.guestDetails = async (reservationId) => {
  try {
    const data = await webcheckInSchema?.find({ reservationId });
    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

exports.getAll = async () => {
  try {
    const data = await webcheckInSchema?.find().sort({ createdAt: -1 });
    return data;
  } catch (error) {
    console.error(errpr);
    throw new error();
  }
};
