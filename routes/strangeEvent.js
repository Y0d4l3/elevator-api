var express = require("express"),
  router = express.Router(),
  {
    getStrangeEvent,
  } = require("../controllers/strangeEvent");


router.get("/strangeEvent", getStrangeEvent, function (req, res) {});

module.exports = router;
