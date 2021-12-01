const { Area } = require("../models");

class AreaController {
  static async creatArea(req, res) {
    try {
      if (!req.body.name) throw new Error("invalid body");
      const newArea = await Area.create(req.body);
      res.send(newArea);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async getAll(req, res) {
    const areas = await Area.findAll();
    res.send(areas);
  }

  static async deleteById(req, res) {
    await Area.destroy({ where: { id: req.params.id } });
    res.sendStatus(204);
  }

  static async getById(req, res) {
    res.send(await Area.findByPk(req.params.id));
  }
}

module.exports = AreaController;
