const mongoose = require("mongoose");
const { MONGOOSE_MODEL } = require("../constant");

const hotelsSchema = new mongoose.Schema({
  hotelName: String,
  address: String,
  gmapUrl: String,
  importantInfo: String,
  wifiPassword: String,
});

module.exports = mongoose.model(MONGOOSE_MODEL.HOTEL, hotelsSchema);
