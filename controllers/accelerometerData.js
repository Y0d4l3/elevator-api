const accelerometerData = require("../models/accelerometerData");
const strangeEvent = require("../models/strangeEvent");

exports.createAccelerometerData = (req, res) => {
  const accelerometerDataInstance = new accelerometerData(req.body);
  accelerometerDataInstance
    .save()
    .then((obj) => {
      if (obj.xValue > 200 || obj.yValue > 200) {
        const strangeEventInstance = new strangeEvent({
          accelerometerData: obj._id,
        });
        strangeEventInstance
          .save()
          .then(() =>
            res.status(201).json({
              accelerometerData: accelerometerDataInstance,
              strangeEvent: strangeEventInstance,
            })
          )
          .catch((err) => res.status(500).json(err));
      } else {
        res.status(201).json(accelerometerDataInstance);
      }
    })
    .catch((err) => res.status(500).json(err));
};

exports.getAccelerometerData = async (req, res) => {
  try {
    const allAccelerometerData = await accelerometerData.find();
    res.status(201).json(allAccelerometerData);
  } catch (error) {
    res.status(500).json(error);
  }
};
