const express = require("express");
const router = express.Router();
const RecruiterController = require("../controllers/RecruiterController.js");

router.post("/", RecruiterController.creatRecruiter)


module.exports = router