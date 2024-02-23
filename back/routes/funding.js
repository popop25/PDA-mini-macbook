const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("hi");
});

router.post("/", (req, res, next) => {
  res.send("hello");
});

module.exports = router;
