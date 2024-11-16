const requestBookingSchema = require("./schema");

exports.createRequest = async (requestsToInsert) => {
  try {
    const data = await requestBookingSchema.create(requestsToInsert);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating requests.");
  }
};

exports.getBooking = async (ObjectId) => {
  try {
    const data = await requestBookingSchema?.findById(ObjectId);
    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};
