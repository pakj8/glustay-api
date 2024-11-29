const Mongoose = require("mongoose");
const { MONGOOSE_MODEL } = require("../constant");

const webCheckInSchema = new Mongoose.Schema(
  {
    timeOfArrival: String,
    firstName: String,
    lastName: String,
    gender: String,
    reservationId: String,
    age: String,
    countryCode: String,
    phoneNumber: String,
    email: String,
    residingCountry: String,
    governmentIdProof: String, // Fix typo
  },
  { timestamps: true }
);

module.exports = Mongoose.model(MONGOOSE_MODEL.WEBCHECKIN, webCheckInSchema);
