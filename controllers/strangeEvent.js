const strangeEvent = require("../models/strangeEvent");

exports.createStrangeEvent = (accelerometerData) => {
  try {
    const strangeEventInstance = new strangeEvent(accelerometerData);
    strangeEventInstance.save();
  } catch (error) {
    console.log(error);
  }
};

exports.getStrangeEvent = async (req, res) => {
  try {
    const allStrangeEvents = await strangeEvent.find();
    res.status(201).json(allStrangeEvents);
  } catch (error) {
    res.status(500).json(error);
  }
};