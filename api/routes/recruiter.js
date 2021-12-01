const express = require("express");
const router = express.Router();
const RecruiterController = require("../controllers/RecruiterController.js");

router.post("/", RecruiterController.creatRecruiter)
router.get("/test", RecruiterController.getAll)
router.get("/:id", RecruiterController.getById)
router.put("/:id/done", RecruiterController.done)
router.get("/",RecruiterController.getAll)

module.exports = router