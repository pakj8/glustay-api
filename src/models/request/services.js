const requestSchema = require("./schema");

exports.createRequest = async (createRequest) => {
  try {
    const requestCreated = await requestSchema?.create(createRequest);
    return requestCreated;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.getRequestByHotelId = async (hotelId) => {
  try {
    const request = await requestSchema
      ?.find({ hotelId })
      .populate("hotelId", "hotelName");
    return request;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.getAllRequest = async () => {
  try {
    const request = await requestSchema?.find();
    return request;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.updateRequestHotelId = async ({ requestId, hotelId, action }) => {
  try {
    if (action === true) {
      const updatedRequest = await requestSchema
        ?.findByIdAndUpdate(
          requestId,
          { $push: { hotelId: hotelId } },
          { new: true }
        )
        .populate("hotelId", "hotelName");
      return updatedRequest;
    } else if (action === false) {
      updatedRequest = await requestSchema
        ?.findByIdAndUpdate(
          requestId,
          { $pull: { hotelId: hotelId } },
          { new: true }
        )
        .populate("hotelId", "hotelName");
      return updatedRequest;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
