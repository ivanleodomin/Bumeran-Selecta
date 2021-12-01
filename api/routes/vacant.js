const router = require("express").Router();
const { VacantController } = require("../controllers/VacantController.js")


router.get('/', VacantController.getAll) // este metodo es para obtener todas las vacantes

router.post('/add', VacantController.createVacant) // este metodo es para postear vacantes

router.get('/:id', VacantController.getById) // este metodo es para obtener una vacante individual

router.put('/:id', VacantController.updateVacantByIdParams) // este metodo es para modificar una vacante

router.delete('/:id', VacantController.deleteVacantByIdParams) // este metodo es para eliminar una vacante

router.put('/:id/addRecruiter',VacantController.addRecruiter) // este metodo es para agregar un Recruiter a una vacante

router.get('/:id/showRanking',VacantController.showRanking) // este metodo es para mostrar los mejores candidatos para dicha vacante

module.exports = router; 