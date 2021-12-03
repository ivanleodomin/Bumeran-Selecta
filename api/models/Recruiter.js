/* eslint-disable eqeqeq */
const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");
const Vacant = require("./Vacant");
const Review = require("./Review");

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
  //excluyente
  const recruiters = await Recruiter.findAll({
    where: { CountryId: vacant.CountryId },
  });

  //calculo de puntaje

  const expertiseCalc = (nivel, experticia) => {
    if (nivel == 1) return (experticia = 4);
    else if (nivel == 2) return (experticia = 3);
    else if (nivel == 3) return (experticia = 2);
    else if (nivel == 4) return (experticia = 1);
  };

  const bests = [];

  for (let recruiter of recruiters) {
    let area = 0;
    let experticia = 0;

    if (recruiter.AreaOp1Id === vacant.AreaId) {
      area = 3;
      expertiseCalc(recruiter.SeniorityOp1Id, experticia);
    } else if (recruiter.AreaOp2Id === vacant.AreaId) {
      area = 2;
      expertiseCalc(recruiter.SeniorityOp1Id, experticia);
    } else if (recruiter.AreaOp3Id === vacant.AreaId) {
      area = 1;
      expertiseCalc(recruiter.SeniorityOp3Id, experticia);
    }
    //vacante : cubierta = asignada
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
