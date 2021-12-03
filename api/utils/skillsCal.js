const  Seniority  = require("../models/Seniority");

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

module.exports = skillsCal;
