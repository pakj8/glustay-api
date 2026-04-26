const mongoose = require("mongoose");
const { MONGOOSE_MODEL } = require("../constant");

const eventsSchema = new mongoose.Schema(
  {
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: MONGOOSE_MODEL.HOTEL,
    },
    name: String,
    imageUrl: String,
    category: String,
    date: Date,
    time: String,
    location: String,
    pricePerPerson: String,
    tags: [String],
    description: String,
    noOfSpots: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  MONGOOSE_MODEL.EVENTSANDACTIVITIES,
  eventsSchema
);
