const accelerometerData = require("../models/accelerometerData");

exports.createAccelerometerData = async (req, res) => {
  try {
    const accelerometerDataInstance = new accelerometerData(req.body);
    const saveResult = await accelerometerDataInstance.save();
    res.status(201).json(saveResult);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getAccelerometerData = async (req, res) => {
  try {
    const accelerometerData = await accelerometerDataClass.find();
    res.status(201).json(accelerometerData);
  } catch (error) {
    res.status(500).json(error);
  }
};
