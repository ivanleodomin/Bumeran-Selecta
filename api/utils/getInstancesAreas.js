const { Area } = require("../models");

/*
param: areasId
arreglo de id de areas 

returns: arreglo con las instancias
*/
async function getAreas(areasId) {
  let instances = [];
  for (const id of areasId) {
    const instance = await Area.findOne({ where: { id: id } });
    instances.push(instance);
  }
  return instances;
}

module.exports = getAreas;
