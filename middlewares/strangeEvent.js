const { createStrangeEvent } = require("../controllers/strangeEvent");
const accelerometerData = require("../models/accelerometerData");
const sendPushsaferNotification = require("./pushsafer");



const checkForStrangeEvent = (id) => {
  accelerometerData
    .findById(id)
    .lean()
    .then((res) => {
      if (res['xValue'] >= 200 || res['yValue'] >= 200) {
        createStrangeEvent(res);
        sendPushsaferNotification();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = checkForStrangeEvent;
