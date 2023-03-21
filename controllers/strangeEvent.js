const strangeEvent = require("../models/strangeEvent");

exports.getStrangeEvent = async (req, res) => {
  try {
    const allStrangeEvents = await strangeEvent.find();
    res.status(201).json(allStrangeEvents);
  } catch (error) {
    res.status(500).json(error);
  }
};