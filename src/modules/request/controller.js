const requestServices = require("../../models/request/services");

exports.getRequestByHotelId = async (hotelId) => {
  try {
    const requests = await requestServices?.getRequestByHotelId(hotelId);
    return requests;
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

exports.createRequest = async (requestInput) => {
  try {
    const createReq = await requestServices?.createRequest(requestInput);
    return createReq;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.getAllRequest = async () => {
  try {
    const req = await requestServices?.getAllRequest();
    return req;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

exports.updateRequestHotelId = async (updateRequestHotelIdInput) => {
  try {
    const updatedRequest = await requestServices?.updateRequestHotelId(
      updateRequestHotelIdInput
    );
    return updatedRequest;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
