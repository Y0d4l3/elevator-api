const { createStrangeEvent } = require("../controllers/strangeEvent");
const accelerometerData = require("../models/accelerometerData");

const checkForStrangeEvent = (id) => {
  accelerometerData
    .findById(id)
    .lean()
    .then((res) => {
      createStrangeEvent(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = checkForStrangeEvent;
