const models = require("../models");

class StatisticsController {
  static async getVacancyReport(req, res) {
    const { area, country } = req.query;
    const where = {};
    const states = ["Iniciada", "Asignada", "Finalizada"];

    if (!country) throw new Error("country field required");

    const countryId = await models.Country.findOne({
      where: { name: country },
    });

    where.CountryId = countryId.id;

    const data = [];

    if (area && area !== "Todos") {
      console.log(area);
      const AreaId = await models.Area.findOne({ where: { name: area } });
      where.AreaId = AreaId.id;
    }

    for (let state of states) {
      where.state = state;
      const vacants = await models.Vacant.findAndCountAll({ where });
      const count = {};
      count.state = state;
      count.count = vacants.count;
      data.push(count);
    }

    res.send(data);
  }

  static async getRecruiterReport(req, res) {
    try {
      const { area, country } = req.query;
      let recruiters,
        arr = [];

      if (!country) throw new Error("country field required");

      const countryData = await models.Country.findOne({
        where: { name: country },
        raw: true,
      });
      const CountryId = countryData.id;

      if (!area || area === "Todos") {
        recruiters = await models.Recruiter.findAll({ where: { CountryId } });
      } else {
        const AreaOp1Id = await models.Area.findOne({
          raw: true,
          where: { name: area },
        });

        recruiters = await models.Recruiter.findAll({
          where: { AreaOp1Id: AreaOp1Id.id, CountryId },
          raw: true,
        });
      }

      for (let rec of recruiters) {
        const recruiter = await models.Recruiter.findOne({
          where: { id: rec.id },
          attributes: ["id", "firstName", "lastName"],
          include: [
            {
              model: models.Country,
              attributes: ["id", "name"],
              as: "Country",
            },
          ],
        });
        const rank = await recruiter.getRanking();
        recruiter.dataValues.ranking = rank.toFixed(1);
        arr.push(recruiter);
      }

      arr.sort((recruiterA, recruiterB) => {
        if (recruiterA.dataValues.ranking > recruiterB.dataValues.ranking)
          return -1;
        if (recruiterA.ranking < recruiterB.ranking) return 1;
        return 0;
      });
      res.send(arr.slice(0, 5));
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }

  static async closingTimeArea(req, res) {
    try {
      const { country } = req.query;

      if (!country) throw new Error("country field required");

      const countryData = await models.Country.findOne({
        where: { name: country },
        raw: true,
      });

      const data = [];

      const areas = await models.Area.findAll({
        raw: true,
      });

      for (let area of areas) {
        const vacants = await models.Vacant.findAll({
          where: {
            AreaId: area.id,
            state: "Finalizada",
            CountryId: countryData.id,
          },
          attributes: ["id", "title", "startDate", "finishtDate"],
        });

        let time = 0;

        vacants.forEach((vacant) => {
          const startDate = new Date(vacant.startDate).getTime();
          const finishtDate = new Date(vacant.finishtDate).getTime();
          time += finishtDate - startDate;
        });

        time = Math.round(time / 86400000 / vacants.length);

        if (!isNaN(time)) {
          const closing = {};
          closing.Area = area.name;
          closing.diasAprox = time;
          data.push(closing);
        }
      }

      res.status(200).send(data);
    } catch (err) {
      res.status(500).send({ error: "Error" });
    }
  }

  static async closingTimeRec(req, res) {
    try {
      const data = [];
      const { country } = req.query;

      if (!country) throw new Error("country field required");

      const countryData = await models.Country.findOne({
        attributes: ["id"],
        where: { name: country },
        raw: true,
      });

      const recruiters = await models.Recruiter.findAll({
        where: { CountryId: countryData.id },
        raw: true,
      });

      for (let recruiter of recruiters) {
        const RecruiterId = recruiter.id;
        const fullName = `${recruiter.firstName} ${recruiter.lastName}`;

        const vacants = await models.Vacant.findAll({
          where: { RecruiterId, state: "Finalizada" },
          raw: true,
          attributes: ["id", "title", "assignmentDate", "finishtDate"],
        });

        let time = 0;

        vacants.forEach((vacant) => {
          const assignmentDate = new Date(vacant.assignmentDate).getTime();
          const finishtDate = new Date(vacant.finishtDate).getTime();
          time += finishtDate - assignmentDate;
        });

        time = Math.round(time / 86400000 / vacants.length);

        if (!isNaN(time)) {
          const recruiterDays = {};
          recruiterDays.Reclutador = fullName;
          recruiterDays.diasAprox = time;
          data.push(recruiterDays);
        }
      }

      res.send(data);
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }
}

module.exports = StatisticsController;
