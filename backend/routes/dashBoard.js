const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Data from API");
});

module.exports = router;
