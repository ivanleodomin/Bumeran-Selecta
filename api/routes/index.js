const express = require("express");
const router = express.Router();
const recruiter = require("./recruiter.js");
const seniority = require("./seniority.js");
const vacant = require("./vacant.js")
const area = require("./area.js");
const country = require("./country.js");

router.use("/vacant", vacant);
router.use("/recruiter", recruiter);
router.use("/seniority", seniority);
router.use("/area", area);
router.use("/country", country);

module.exports = router
