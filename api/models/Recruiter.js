const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");
const Review = require("./Review");
const { skillsCal, calcActivity } = require("../utils/skillsCal.js");

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
  if (reviews.length <= 3) return 3;
  else {
    let acc = 0;
    reviews.forEach((element) => {
      acc += element.score;
    });

    return acc / reviews.length;
  }
};

Recruiter.getBests = async function (vacant) {
  const bests = [];
  try {
    const recruiters = await Recruiter.findAll({
      where: { CountryId: vacant.CountryId },
    });

    for (let recruiter of recruiters) {
      const { area, experticia } = await skillsCal(recruiter, vacant);
      const actividad = await calcActivity(recruiter.id);
      const instance = await Recruiter.findByPk(recruiter.id);
      const rank = await instance.getRanking();

      const points = area * 0.2 + experticia * 0.3 + rank * 0.6;
      recruiter.dataValues.position = points - points * actividad;
      bests.push(recruiter);
    }

    bests.sort((recruiterA, recruiterB) => {
      if (recruiterA.dataValues.position > recruiterB.dataValues.position)
        return -1;
      if (recruiterA.dataValues.position < recruiterB.dataValues.position)
        return 1;
      return 0;
    });
  } finally {
    return bests;
  }
};

module.exports = Recruiter;
