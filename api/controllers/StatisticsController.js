const models = require("../models");

class StatisticsController {
  static async getVacancyReport(req, res) {
    const { state, area, country } = req.query;
    const where = {};

    if (!country) throw new Error("country field required");

    const countryId = await models.Country.findOne({
      where: { name: country },
    });

    where.CountryId = countryId.id;

    if (state) where.state = state;
    if (area) {
      const AreaId = await models.Area.findOne({ where: { name: area } });
      where.AreaId = AreaId.id;
    }

    const vacants = await models.Vacant.findAndCountAll({ where });

    res.send(vacants);
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

      if (!area) {
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
        recruiter.dataValues.ranking = await recruiter.getRanking();
        console.log(recruiter);
        arr.push(recruiter);
      }

      arr.sort((recruiterA, recruiterB) => {
        if (recruiterA.ranking > recruiterB.ranking) return -1;
        if (recruiterA.ranking < recruiterB.ranking) return 1;
        return 0;
      });
      res.send(arr);
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

      const data = {};

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

        if (!isNaN(time)) data[area.name] = time;
      }

      res.status(200).send(data);
    } catch (err) {
      res.status(500).send({ error: "Error" });
    }
  }

  static async closingTimeRec(req, res) {
    try {
      const recruiterDays = {};
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
          console.log(
            "assignmentDate",
            vacant.assignmentDate,
            "finishtDate",
            vacant.finishtDate
          );
        });

        time = Math.round(time / 86400000 / vacants.length);

        console.log(`${recruiter.firstName} ${recruiter.lastName} TIME:`, time);

        if (!isNaN(time)) recruiterDays[fullName] = time;
        else recruiterDays[fullName] = -1;
      }

      res.send(recruiterDays);
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }
}

module.exports = StatisticsController;
