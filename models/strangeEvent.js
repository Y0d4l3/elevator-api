var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var strangeEvent = Schema({
  accelerometerData: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AccelerometerData",
  },
  description: { type: String, required: true, default: "Strange !?!" },
});

module.exports = mongoose.model("StrangeEvent", strangeEvent);
