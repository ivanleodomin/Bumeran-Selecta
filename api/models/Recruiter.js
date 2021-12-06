const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");
const Vacant = require("./Vacant");
const Review = require("./Review");
const skillsCal = require("../utils/skillsCal.js");

class Recruiter extends Model {}

Recruiter.init(
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "Recruiter",
  }
);

Recruiter.prototype.getRanking = async function () {
  const reviews = await Review.findAll({
    where: {
      RecruiterId: this.id,
    },
  });
  if (!reviews.length) return 0;
  else {
    let acc = 0;
    reviews.forEach((element) => {
      acc += element.score;
    });

    return acc / reviews.length;
  }
};

Recruiter.getBests = async function (vacant) {
  
  const recruiters = await Recruiter.findAll({
    where: { CountryId: vacant.CountryId },
  });

  const bests = [];

  for (let recruiter of recruiters) {
    const { area, experticia } = await skillsCal(recruiter, vacant);

    const actividad = await Vacant.findAndCountAll({
      where: { RecruiterId: recruiter.id, state: "Asignada" },
    });

    const instance = await Recruiter.findByPk(recruiter.id);
    const rank = await instance.getRanking();

    recruiter.dataValues.position = area + experticia + rank - actividad.count;
    bests.push(recruiter);
  }

  bests.sort((recruiterA, recruiterB) => {
    if (recruiterA.position < recruiterB.position) return 1;
    if (recruiterA.position > recruiterB.position) return -1;
    return 0;
  });

  return bests;
};

module.exports = Recruiter;
