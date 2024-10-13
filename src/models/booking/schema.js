const mongoose = require("mongoose");
const { MONGOOSE_MODEL } = require("../constant");

const bookingSchema = new mongoose.Schema(
  {
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: MONGOOSE_MODEL.HOTEL,
    },
    firstName: String,
    lastName: String,
    reservationId: String,
    checkinDate: Date,
    checkOutDate: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(MONGOOSE_MODEL.BOOKING, bookingSchema);
