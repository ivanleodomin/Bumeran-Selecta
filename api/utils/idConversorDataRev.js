const { Review, Vacant } = require("../models");

/*
 * Convierte todos los FK de recruiters en datos
 */
async function idConversorDataRev(reviews) {
    const vacants = []
    for(const review of reviews){
       const vacant = await Vacant.findOne({where: { id: review.VacantId }})
       vacants.push(vacant)
    }

  return vacants;
}

module.exports = idConversorDataRev;
