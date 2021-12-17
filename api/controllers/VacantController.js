const {
  Vacant,
  Recruiter,
  City,
  Review,
  Area,
  Country,
  Seniority,
} = require("../models");

class VacantController {
  //------------------Vacant-----------------------

  static async createVacant(req, res, next) {
    const { AreaId, CityId, CountryId, SeniorityId } = req.body;
    const vacant = await Vacant.create(req.body);
    const city = await City.findByPk(CityId);
    const country = await Country.findByPk(CountryId);
    const degree = await Seniority.findByPk(SeniorityId);
    const area = await Area.findByPk(AreaId);
    const created = await vacant.setCity(city);

    await vacant.setSeniority(degree);
    await vacant.setArea(area);
    await vacant.setCountry(country);
    res.status(201).send(created);
  }

  static async getById(req, res, next) {
    try {
      const vacant = await Vacant.findOne({
        attributes: ["id", "title", "state", "description", "vacant"],
        where: { id: req.params.id },
        include: [
          {
            model: Recruiter,
            attributes: ["firstName", "lastName"],
            as: "Recruiter",
          },
          { model: Country, attributes: ["id", "name"], as: "Country" },
          { model: City, attributes: ["id", "name"], as: "City" },
          { model: Area, attributes: ["id", "name"], as: "Area" },
          { model: Seniority, attributes: ["id", "name"], as: "Seniority" },
        ],
      });

      return res.send(vacant);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const { state, area, country } = req.query;
      const where = {};

      if (state) where.state = state;
      if (area) {
        const AreaId = await Area.findOne({ where: { name: area } });
        where.AreaId = AreaId.id;
      }
      if (country) {
        const CountryId = await Country.findOne({ where: { name: country } });
        where.CountryId = CountryId.id;
      }

      const vacant = await Vacant.findAll({
        where,
        include: [{ model: Country, attributes: ["name"], as: "Country" }],
      });

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
      const { id } = req.params;
      await Vacant.destroy({ where: { id: id } });
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
        { state: "Asignada" },
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

    const recruiters = await Recruiter.getBests(vacant);

    res.send(recruiters);
  }

  static async getStates(req, res) {
    res.send(200);
  }
}

module.exports = { VacantController };
