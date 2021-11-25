const express = require("express");
const router = express.Router();
const SeniorityController = require("../controllers/SeniorityController");

router.post("/", SeniorityController.createSeniority)
router.get("/", SeniorityController.getAll)
router.delete("/:id", SeniorityController.deleteById)


module.exports = router