const express = require("express");
const router = express.Router();
const StatisticsController = require("../controllers/StatisticsController");

router.get("/vacants", StatisticsController.getVacancyReport); //resibe un query string "state" con el estado de vacante que se desea y se resibira la cantidad
router.get("/recruiters-ranck", StatisticsController.getRecruiterReport); //resibe un query string "state" con el estado de vacante que se desea y se resibira la cantidad
router.get("/vacants/closing", StatisticsController.closingTimeArea)

module.exports = router;
