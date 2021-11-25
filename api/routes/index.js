const express = require("express");
const router = express.Router();
const recruiter = require("./recruiter.js");
const seniority = require("./seniority.js");
const area = require("./area.js");

router.use("/recruiter", recruiter);
router.use("/seniority", seniority);
router.use("/area", area);

module.exports = router;
