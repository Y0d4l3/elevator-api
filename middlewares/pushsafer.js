var push = require("pushsafer-notifications");

const sendPushsaferNotification = () => {
  var p = new push({
    k: process.env.PUSHSAFER_PRIVATE_KEY,
    debug: false,
  });

  var msg = {
    m: "Something strang is happening in your Elevator!",
    t: "Elevator warning",
    s: "8",
    i: "5",
    d: process.env.PUSHSAFER_DEVICE_ID,
  };

  p.send(msg, function (err, result) {
    if (err) {
      console.log("ERROR:", err);
    }
    console.log("RESULT", result);
  });
};

module.exports = sendPushsaferNotification;
