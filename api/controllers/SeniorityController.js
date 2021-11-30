const { Seniority } = require("../models");

class SeniorityController {
  static async createSeniority(req, res) {
    try {
      if (!req.body.name) throw new Error("invalid body");
      const newSeniority = await Seniority.create(req.body);
      res.send(newSeniority);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteById(req, res) {
    const id = req.params.id;
    await Seniority.destroy({ where: { id: id } });
    res.sendStatus(204);
  }

  static async getAll(req, res) {
    const allSeniority = await Seniority.findAll();
    res.send(allSeniority);
  }

  static async getById(req, res) {
    res.send(await Seniority.findByPk(req.params.id));
  }
}

module.exports = SeniorityController;
