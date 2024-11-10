const webcheckInSchema = require("./schema");

exports.createWebCheckIn = async (WebCheckInInput) => {
  try {
    const data = await webcheckInSchema?.create(WebCheckInInput);
    return;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
