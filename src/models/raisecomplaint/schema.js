const mongoose = require("mongoose");
const { MONGOOSE_MODEL } = require("../constant");

const complaintSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    subject: String,
    complaint: String,
    reservationId: String,
  },
  { timestamps: true }
);

module.exports = mongoose?.model(MONGOOSE_MODEL);
