const Mongoose = require("mongoose");
const { MONGOOSE_MODEL } = require("../constant");

const webCheckInSchema = new Mongoose.Schema({
  timeOfArrival: Date,
  firstName: String,
  lastName: String,
  gender: String,
  age: String,
  countryCode: String,
  phoneNumber: String,
  email: String,
  residingCountry: String,
  stayedWithUs: Boolean,
  govermentIdProff: String,
  uploadedProffUrl: String,
});

module.exports = Mongoose.model(MONGOOSE_MODEL.WEBCHECKIN, webCheckInSchema);
