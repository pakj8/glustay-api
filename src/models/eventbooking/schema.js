const mongoose = require("mongoose");
const { MONGOOSE_MODEL } = require("../constant");

const bookingEventSchema = new mongoose.Schema(
  {
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: MONGOOSE_MODEL.EVENTSANDACTIVITIES,
    },
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: MONGOOSE_MODEL.BOOKING,
    },
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: MONGOOSE_MODEL.HOTEL,
    },
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    numberOfGuests: Number,
    totalAmount: String,
    reservationId: String,
    eventBookingId: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  MONGOOSE_MODEL.EVENTBOOKING,
  bookingEventSchema
);
