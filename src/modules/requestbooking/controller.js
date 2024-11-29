const requestBookingServices = require("../../models/requestbooking/services");
const requestBookingSchema = require("../../models/requestbooking/schema");

exports.createRequestBooking = async (requestInput) => {
  try {
    const { guestFirstName, guestLastName, reservationId, hotelId, request } =
      requestInput;

    const totalRequests = await requestBookingSchema.countDocuments();

    // const requestsToInsert = request.map((reqItem) => ({
    //   guestFirstName,
    //   guestLastName,
    //   reservationId,
    //   hotelId,
    //   requestName: reqItem.requestTitle,
    //   description: reqItem.description,
    //   requestCategory: reqItem.category,
    //   message: reqItem.message || "",
    //   status: "Pending",
    //   reqUniqueId: `REQUNI${totalRequests + 1}`,
    // }));

    const requestsToInsert = {
      guestFirstName,
      guestLastName,
      reservationId,
      hotelId,
      request: request?.map((reqItem) => ({
        requestTitle: reqItem?.requestTitle,
        description: reqItem?.description,
        message: reqItem?.message,
        category: reqItem?.category,
      })),
      status: "Pending",
      reqUniqueId: `REQUNI${totalRequests + 1}`,
    };

    const createdRequests = await requestBookingServices.createRequest(
      requestsToInsert
    );

    return createdRequests;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create requests.");
  }
};

exports.getRequestBookingByObjectId = async (ObjectId) => {
  try {
    const data = await requestBookingServices?.getBooking(ObjectId);
    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

exports.getRequestBooking = async () => {
  try {
    const data = await requestBookingServices?.getAll();
    return data;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

exports.updateStatus = async (objectId, status) => {
  try {
    const data = await requestBookingServices?.update(objectId, status);
    return data;
  } catch (error) {
    console.log(error);
    throw new error();
  }
};
