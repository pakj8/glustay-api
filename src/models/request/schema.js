const mongoose = require("mongoose");
const { MONGOOSE_MODEL } = require("../constant");

const requestSchema = new mongoose.Schema({
  hotelId: [
    { type: mongoose.Schema.Types.ObjectId, ref: MONGOOSE_MODEL.HOTEL },
  ],
  requestTitle: String,
  category: String,
  image: String,
  description: String,
});

module.exports = mongoose.model(MONGOOSE_MODEL.REQUEST, requestSchema);
