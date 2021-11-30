const { Recruiter, Review, Vacant } = require("../models");
const getareas = require("../utils/getInstancesAreas");
const getSeniorities = require("../utils/getInstancesSeniorities");

class RecruiterController {
  static async creatRecruiter(req, res) {
    try {
      const {
        firstName,
        lastName,
        residence,
        areaOp1,
        areaOp2,
        areaOp3,
        seniorityOp1,
        seniorityOp2,
        seniorityOp3,
      } = req.body;

      const [area1, area2, area3] = await getareas([areaOp1, areaOp2, areaOp3]);

      const [sen1, sen2, sen3] = await getSeniorities([
        seniorityOp1,
        seniorityOp2,
        seniorityOp3,
      ]);

      const newRec = await Recruiter.create({ firstName, lastName, residence });

      newRec.setAreaOp1(area1);
      newRec.setAreaOp2(area2);
      newRec.setAreaOp3(area3);

      newRec.setSeniorityOp1(sen1);
      newRec.setSeniorityOp2(sen2);
      newRec.setSeniorityOp3(sen3);

      res.send(newRec);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    const recruiter = await Recruiter.findOne({ where: { id: id } });
    res.send(recruiter);
  }

  static async done(req, res) {
    const idRecruiter = req.params.id;
    const { idVacante, score } = req.body;

    const review = await Review.create({
      score: score,
    });

    const recruiter = await Recruiter.findByPk(idRecruiter);

    await Vacant.update(
      { State: "Finalizada" },
      { where: { id: idVacante }, returning: true }
    );

    const vacant = await Vacant.findByPk(idVacante);

    review.setVacant(vacant);
    recruiter.addReview(review);

    res.send( await Review.findByPk(review.id));
  }

  static async getAll(req, res) {
    const rec = await Recruiter.findAll();
    res.send(rec);
  }
}

module.exports = RecruiterController;
