const express = require("express");
const router = express.Router();
const recruiter = require("./recruiter.js");

router.use("/recruiter", recruiter);

module.exports = router;
