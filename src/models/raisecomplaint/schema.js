const mongoose = require("mongoose");
const { MONGOOSE_MODEL } = require("../constant");

const complaintSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    subject: String,
    complaint: String,
    reservationId: String,
    hotelId: {
      ref: MONGOOSE_MODEL?.HOTEL,
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

module.exports = mongoose?.model(
  MONGOOSE_MODEL.RAISECOMPLAINT,
  complaintSchema
);
