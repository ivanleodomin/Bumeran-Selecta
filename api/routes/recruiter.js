const express = require("express");
const router = express.Router();
const RecruiterController = require("../controllers/RecruiterController.js");

router.get("/",RecruiterController.getAll)
router.post("/", RecruiterController.creatRecruiter)
router.get("/test", RecruiterController.getAll)
router.get("/:id", RecruiterController.getById)

module.exports = router