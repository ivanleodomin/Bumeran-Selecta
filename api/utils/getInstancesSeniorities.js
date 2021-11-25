const { Seniority } = require("../models");

/*
param: senioritiesId
arreglo de id de seniorities 

returns: arreglo con las instancias
*/

async function getSeniorities(seniooritiesId) {
  let instances = [];
  for (const id of seniooritiesId) {
    const instance = await Seniority.findOne({ where: { id: id } });
    instances.push(instance);
  }
  return instances;
}

module.exports = getSeniorities;
