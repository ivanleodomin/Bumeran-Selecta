const { Vacant, Recruiter } = require("../models");

class VacantController {
  //------------------Vacant-----------------------

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
      const vacant = await Vacant.findAll();
      return res.status(200).send(vacant);
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

  static async addRecruiter(req, res, next) {
    try {
      const { id } = req.params;
      const { recruiterId } = req.body;
      const vacant = await Vacant.findByPk(id);
      const recruiter = await Recruiter.findByPk(recruiterId);
      vacant.setRecruiter(recruiter);

      await Vacant.update(
        { State: "Cubierta" },
        { where: { id: id }, returning: true }
      );

      res.status(202).send(vacant);
    } catch (err) {
      next(err);
    }
  }

  static async showRanking(req, res, next) {
    const { id } = req.params;
    const vacant = await Vacant.findByPk(id);

    let recruiters = await Recruiter.findAll({
      where: { residencia: vacant.country },
    });

    res.send(recruiters);
  }
}

module.exports = { VacantController };
