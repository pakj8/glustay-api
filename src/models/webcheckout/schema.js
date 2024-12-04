const mongoose = require("mongoose");
const { MONGOOSE_MODEL } = require("../constant");

const checkoutSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    phoneNumber: String,
    timings: String,
    reservationId: String,
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: MONGOOSE_MODEL.HOTEL,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(MONGOOSE_MODEL?.WEBCHECKOUT, checkoutSchema);
