var express = require("express"),
  router = express.Router(),
  {
    createAccelerometerData,
    getAccelerometerData,
  } = require("../controllers/accelerometerData");

router.post("/accelerometerData", createAccelerometerData, function (req, res) {});

router.get("/accelerometerData", getAccelerometerData, function (req, res) {});

module.exports = router;
