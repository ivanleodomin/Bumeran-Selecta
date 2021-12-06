const express = require("express");
const router = express.Router();
const RecruiterController = require("../controllers/RecruiterController.js");

router.get("/", RecruiterController.getAll); //Obtiene todos los reclutadores

router.post("/", RecruiterController.creatRecruiter); //crea un nuevo reclutador

router.get("/:id", RecruiterController.getById); //Obtiene informacion detallada de un reclutador

router.delete("/:id", RecruiterController.deleteById); //Elimina el reclutador que tenga como id el parametro

module.exports = router;
