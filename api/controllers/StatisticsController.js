const models = require("../models");

class StatisticsController {
  static async getVacancyReport(req, res) {
    const { state, area } = req.query;
    const where = {};

    if (state) where.state = state;
    if (area) {
      const AreaId = await models.Area.findOne({ where: { name: area } });
      where.AreaId = AreaId.id;
    }

    const vacants = await models.Vacant.findAndCountAll({ where });

    res.send(vacants);
  }

  static async getRecruiterReport(req, res) {
    const { area } = req.query;
    let recruiters;
    let arr = [];

    if (!area) recruiters = await models.Recruiter.findAll();
    else {
      const AreaOp1Id = await models.Area.findOne({ where: { name: area } });
      recruiters = await models.Recruiter.findAll({
        where: { AreaOp1Id: AreaOp1Id.id },
      });
    }

    for (let rec of recruiters) {
      const recruiter = await models.Recruiter.findByPk(rec.id);
      recruiter.dataValues.ranking = await recruiter.getRanking();
      arr.push(recruiter.dataValues);
    }

    arr.sort((recruiterA, recruiterB) => {
      if (recruiterA.ranking > recruiterB.ranking) return -1;
      if (recruiterA.ranking < recruiterB.ranking) return 1;
      return 0;
    });
    res.send(arr);
  }

  static async closingTimeArea(req, res) {
    const data = {};

    const areas = await models.Area.findAll({
      raw: true,
    });

    for (let area of areas) {
      const vacants = await models.Vacant.findAll({
        where: { AreaId: area.id, state: "Finalizada" },
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
  }
}

module.exports = StatisticsController;
