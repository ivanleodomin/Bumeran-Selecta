const router = require("express").Router();
const CountryController = require("../controllers/CountryController.js");

router.get("/", CountryController.getAll)
router.get("/:id", CountryController.getById)

module.exports = router