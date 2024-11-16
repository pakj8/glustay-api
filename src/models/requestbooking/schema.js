const mongoose = require("mongoose");
const { MONGOOSE_MODEL } = require("../constant");

const requestBookingSchema = new mongoose.Schema(
  {
    guestFirstName: String,
    guestLastName: String,
    reservationId: String,
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: MONGOOSE_MODEL.HOTEL,
    },
    // requestName: String,
    // description: String,
    // requestCategory: String,
    // message: String,
    request: [
      {
        requestTitle: String,
        description: String,
        category: String,
        message: String,
      },
    ],
    status: String,
    reqUniqueId: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  MONGOOSE_MODEL.REQUESTBOOKING,
  requestBookingSchema
);
