const Seniority = require("../models/Seniority");
const Vacant = require("../models/Vacant");

async function expertiseCalc(id) {
  const degree = await Seniority.findByPk(id);
  if (degree.name === "Gerente/Director") return 4;
  if (degree.name === "SemiSenior/Senior") return 3;
  if (degree.name === "Jefetura") return 2;
  if (degree.name === "Training/Junior") return 1;
}

async function skillsCal(recruiter, vacant) {
  const points = { area: 0, experticia: 0 };

  if (recruiter.AreaOp1Id === vacant.AreaId) {
    points.area = 3;
    points.experticia = await expertiseCalc(recruiter.SeniorityOp1Id);
  } else if (recruiter.AreaOp2Id === vacant.AreaId) {
    points.area = 2;
    points.experticia = await expertiseCalc(recruiter.SeniorityOp1Id);
  } else if (recruiter.AreaOp3Id === vacant.AreaId) {
    points.area = 1;
    points.experticia = await expertiseCalc(recruiter.SeniorityOp3Id);
  }
  return points;
}

async function calcActivity(recruiterId) {
  const actividad = await Vacant.findAndCountAll({
    where: { RecruiterId: recruiterId, state: "Asignada" },
  });

  if (actividad.rows === 3) return 0.5;
  if (actividad.rows === 2) return 0.25;
  if (actividad.rows === 1) return 0.15;
  if (actividad.rows === 0) return 0;
}

module.exports = { skillsCal, calcActivity };
