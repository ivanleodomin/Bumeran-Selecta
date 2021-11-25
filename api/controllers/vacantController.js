const { Vacant } = require("../models");

class VacantController {

  //------------------VACANTS-----------------------

  static createVacant(req, res, next) {
    Vacant.create(req.body)
      .then((vacant) => {
        return res.status(201).send(vacant);
      })
      .catch((err) => next(err));
  }

  static async getById(req, res, next) {
    try {
      const vacant = await Vacant.findByPk(req.params.id);
      return res.status(200).send(vacant);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const vacants = await Vacant.findAll();
      return res.status(200).send(vacants);
    } catch (err) {
      next(err);
    }
  }

  static async updateVacantByIdParams(req, res, next) {
    try {
      const vacant = await Vacant.findByPk(req.params.id);
      await vacant.update(req.body);
      return res.status(202).send(vacant);
    } catch (err) {
      next(err);
    }
  }

  static async deleteVacantByIdParams(req, res, next) {
    try {
      const vacant = await Vacant.findByPk(req.params.id);
      await vacant.destroy();
      return res.status(204).send("Vacant deleted successfully");
    } catch (err) {
      next(err);
    }
  }
}

module.exports = { VacantController };
