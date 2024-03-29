const {
  Recruiter,
  Review,
  Vacant,
  Area,
  Seniority,
  City,
  Country,
} = require("../models");
const getareas = require("../utils/getInstancesAreas");
const getSeniorities = require("../utils/getInstancesSeniorities");

class RecruiterController {
  static async creatRecruiter(req, res) {
    const {
      firstName,
      lastName,
      cityId,
      countryId,
      areaOp1,
      areaOp2,
      areaOp3,
      seniorityOp1,
      seniorityOp2,
      seniorityOp3,
    } = req.body;

    const [area1, area2, area3] = await getareas([areaOp1, areaOp2, areaOp3]);

    const [sen1, sen2, sen3] = await getSeniorities([
      seniorityOp1,
      seniorityOp2,
      seniorityOp3,
    ]);
    const city = await City.findByPk(cityId);
    const country = await Country.findByPk(countryId);

    const newRec = await Recruiter.create({
      firstName,
      lastName,
    });
    newRec.setCountry(country);
    newRec.setCity(city);

    newRec.setAreaOp1(area1);
    newRec.setAreaOp2(area2);
    newRec.setAreaOp3(area3);

    newRec.setSeniorityOp1(sen1);
    newRec.setSeniorityOp2(sen2);
    newRec.setSeniorityOp3(sen3);

    res.send(newRec);
  }

  static async getById(req, res, next) {
    try {
      const { id } = req.params;

      const recruiter = await Recruiter.findOne({
        attributes: ["id", "firstName", "lastName"],
        where: { id: id },
        include: [
          { model: Area, as: "AreaOp1", attributes: ["id", "name"] },
          { model: Area, as: "AreaOp2", attributes: ["id", "name"] },
          { model: Area, as: "AreaOp3", attributes: ["id", "name"] },
          { model: Seniority, as: "SeniorityOp1", attributes: ["id", "name"] },
          { model: Seniority, as: "SeniorityOp2", attributes: ["id", "name"] },
          { model: Seniority, as: "SeniorityOp3", attributes: ["id", "name"] },
          { model: City, as: "City", attributes: ["id", "name"] },
          { model: Country, as: "Country", attributes: ["id", "name"] },
        ],
      });

      /* if (!recruiter) return res.sendStatus(404); */

      const history = await Vacant.findAll({
        attributes: ["id", "title", "vacant", "startDate", "assignmentDate"],
        include: [{ model: Area, as: "Area", attributes: ["name"] }],
        where: { RecruiterId: id, state: "Finalizada" },
      });

      const activeVacancies = await Vacant.findAll({
        attributes: ["id", "title", "vacant", "startDate", "assignmentDate"],
        include: [{ model: Area, as: "Area", attributes: ["name"] }],
        where: { RecruiterId: id, state: "Asignada" },
      });

      recruiter.dataValues.ranking = await recruiter.getRanking();
      recruiter.dataValues.activeVacancies = activeVacancies;
      recruiter.dataValues.history = history;

      res.send(recruiter);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res) {
    try {
      const { seniority, area, country } = req.query;

      const where = {};

      if (seniority) {
        const seniorityOp1 = await Seniority.findOne({
          where: { name: seniority },
        });
        where.seniorityOp1Id = seniorityOp1.id;
      }
      if (area) {
        const AreaOp1Id = await Area.findOne({ where: { name: area } });
        where.AreaOp1Id = AreaOp1Id.id;
      }
      if (country) {
        const CountryId = await Country.findOne({ where: { name: country } });
        where.CountryId = CountryId.id;
      }

      const rec = await Recruiter.findAll({
        where,
      });
      res.send(rec);
    } catch (err) {
      console.log(err);
      res.status(500).send([]);
    }
  }

  static async deleteById(req, res) {
    const { id } = req.params;
    await Vacant.update(
      { RecruiterId: null, state: "Iniciada" },
      { where: { RecruiterId: id } }
    );

    await Recruiter.destroy({ where: { id: id } });
    res.sendStatus(204);
  }

  static async updateRecruiterByIdParams(req, res, next) {
    try {
      console.log(req.body, "BODY");
      const {
        firstName,
        lastName,
        cityId,
        countryId,
        areaOp1,
        areaOp2,
        areaOp3,
        seniorityOp1,
        seniorityOp2,
        seniorityOp3,
        id,
      } = req.body;

      const country = await Country.findByPk(countryId);
      const city = await City.findByPk(cityId);
      const recruiter = await Recruiter.findByPk(id);

      await Recruiter.update(
        { firstName, lastName },
        {
          where: {
            id,
          },
        }
      );

      recruiter.setCountry(country);
      recruiter.setCity(city);

      recruiter.setAreaOp1(areaOp1);
      recruiter.setAreaOp2(areaOp2);
      recruiter.setAreaOp3(areaOp3);

      recruiter.setSeniorityOp1(seniorityOp1);
      recruiter.setSeniorityOp2(seniorityOp2);
      recruiter.setSeniorityOp3(seniorityOp3);

      return res.status(202).send(recruiter);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = RecruiterController;
