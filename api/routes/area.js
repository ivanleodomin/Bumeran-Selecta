const express = require("express");
const router = express.Router();
const AreaController = require("../controllers/AreaController");

router.post("/", AreaController.creatArea);
router.get("/", AreaController.getAll);
router.delete("/:id", AreaController.deleteById);

module.exports = router;
