const express = require("express");
const router = express.Router();
const RecruiterController = require("../controllers/RecruiterController.js");

router.get("/", RecruiterController.test)


module.exports = router