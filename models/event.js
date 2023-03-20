var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var event = Schema({
  accelerometerData: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AccelerometerData",
  },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Event", event);
