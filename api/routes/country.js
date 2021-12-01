const router = require("express").Router();
const CountryController = require("../controllers/CountryController.js");

router.get("/", CountryController.getAll)


module.exports = router