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

exports.getAll = async () => {
  try {
    const data = await requestBookingSchema
      ?.find()
      ?.sort({ createdAt: -1 })
      .populate("hotelId", "hotelName");
    return data;
  } catch (error) {
    console.log(error);
    trh;
  }
};

exports.update = async (objectId, status) => {
  try {
    const data = await requestBookingSchema?.findByIdAndUpdate(
      objectId,
      { status },
      { new: true }
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new error();
  }
};
