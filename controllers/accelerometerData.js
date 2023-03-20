const checkForStrangeEvent = require("../middlewares/strangeEvent");
const accelerometerData = require("../models/accelerometerData");

exports.createAccelerometerData = async (req, res) => {
  try {
    const accelerometerDataInstance = new accelerometerData(req.body);
    const saveResult = await accelerometerDataInstance.save();
    checkForStrangeEvent(id=saveResult.id);
    res.status(201).json(saveResult);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAccelerometerData = async (req, res) => {
  try {
    const allAccelerometerData = await accelerometerData.find();
    res.status(201).json(allAccelerometerData);
  } catch (error) {
    res.status(500).json(error);
  }
};
