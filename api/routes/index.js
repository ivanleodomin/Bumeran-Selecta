const express = require("express");
const router = express.Router();
const recruiter = require("./recruiter.js");
const seniority = require("./seniority.js");
const area = require("./area.js");
const vacant = require("./vacant")

router.use("/recruiter", recruiter);
router.use("/seniority", seniority);
router.use("/area", area);
router.use("/vacants", vacant)

module.exports = router;
