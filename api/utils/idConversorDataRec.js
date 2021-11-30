const { Area, Seniority } = require("../models");

/*
 * Convierte todos los FK de recruiters en datos
 */
async function idConversorData(recruiter) {
  const area1 = await Area.findByPk(recruiter.AreaOp1Id);
  const area2 = await Area.findByPk(recruiter.AreaOp2Id);
  const area3 = await Area.findByPk(recruiter.AreaOp3Id);

  recruiter.AreaOp1Id = area1.name;
  recruiter.AreaOp2Id = area2.name;
  recruiter.AreaOp3Id = area3.name;

  const sen1 = await Seniority.findByPk(recruiter.SeniorityOp1Id);
  const sen2 = await Seniority.findByPk(recruiter.SeniorityOp2Id);
  const sen3 = await Seniority.findByPk(recruiter.SeniorityOp3Id);

  recruiter.SeniorityOp1Id = sen1.name;
  recruiter.SeniorityOp2Id = sen2.name;
  recruiter.SeniorityOp3Id = sen3.name;

  return recruiter;
}

module.exports = idConversorData;
