const { Vacant, Recruiter, City, Review, Area, Country } = require("../models");

class VacantController {
  //------------------Vacant-----------------------

  static async createVacant(req, res, next) {
    const { areaId, cityId, countryId } = req.body;
    const vacant = await Vacant.create(req.body);
    const city = await City.findByPk(cityId);
    const country = await Country.findByPk(countryId);
    const area = await Area.findByPk(areaId);
    const created = await vacant.setCity(city);

    await vacant.setArea(area);
    await vacant.setCountry(country);
    res.status(201).send(created);
  }

  static async getById(req, res, next) {
    try {
      const vacant = await Vacant.findOne({
        attributes: ["id", "job", "state", "description", "vacant"],
        where: { id: req.params.id },
        include: [
          {model: Recruiter, attributes: ["firstName", "lastName"], as: "Recruiter" },
          { model: Country, attributes: ["id", "name"], as: "Country" },
          { model: City, attributes: ["id", "name"], as: "City" },
          { model: Area, attributes: ["id", "name"], as: "Area" },
        ],
      });

      return res.send(vacant);
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
        { state: "Cubierta" },
        { where: { id: id }, returning: true }
      );

      res.status(202).send(vacant);
    } catch (err) {
      next(err);
    }
  }

  static async doneProcess(req, res) {
    const id = req.params.id;
    const { score } = req.body;

    const vacant = await Vacant.findByPk(id);
    const recruiter = await Recruiter.findByPk(vacant.RecruiterId);

    const exist = await Review.count({
      where: { RecruiterId: recruiter.id, VacantId: id },
    });
    if (exist) return res.status(203).send("process already finished");

    const review = await Review.create({
      score: score,
    });

    await Vacant.update({ state: "Finalizada" }, { where: { id: id } });

    review.setVacant(vacant);
    recruiter.addReview(review);

    res.send(await Review.findByPk(review.id));
  }

  static async showRanking(req, res, next) {
    const { id } = req.params;
    const vacant = await Vacant.findByPk(id);

    Recruiter.getBests(vacant);

    res.send(vacant);
  }
}

module.exports = { VacantController };
