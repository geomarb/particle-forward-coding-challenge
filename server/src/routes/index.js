const express = require("express");
const { getCarController } = require("../controller");

const router = express.Router({
  caseSensitive: false,
  strict: true,
  mergeParams: false,
});

router.get("/", getCarController);

module.exports = router;
