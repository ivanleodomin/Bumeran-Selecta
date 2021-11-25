const { Recruiter } = require("../models");
const getareas = require("../utils/getInstancesAreas");
const getSeniorities = require("../utils/getInstancesSeniorities");

class RecruiterController {
  static async creatRecruiter(req, res) {
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

    const [area1, area2, area3] = await getareas([
      areaOp1,
      areaOp2,
      areaOp3
    ]);
    const [sen1, sen2, sen3] = await getSeniorities([
      seniorityOp1,
      seniorityOp2,
      seniorityOp3
    ]);

    const newRec = await Recruiter.create({ firstName, lastName, residence });

    newRec.setAreaOp1(area1);
    newRec.setAreaOp2(area2);
    newRec.setAreaOp3(area3);

    newRec.setSeniorityOp1(sen1);
    newRec.setSeniorityOp2(sen2);
    newRec.setSeniorityOp3(sen3);

    res.send(newRec);
  }
}

module.exports = RecruiterController;
