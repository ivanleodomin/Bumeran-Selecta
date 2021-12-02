const { Country, City } = require("../models");

class CountryController {
  static async getAll(req, res) {
    try {
      const countries = await Country.findAll({
        attributes: ["id", "name"],
      });
      res.send(countries);
    } catch {
      res.sendStatus(500);
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const cities = await City.findAll({
        where: { CountryId: id },
        attributes: ["id","name"],
      });
      res.send(cities);
    } catch {
      res.sendStatus(500);
    }
  }
}

module.exports = CountryController;
