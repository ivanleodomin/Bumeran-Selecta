const { Country } = require("../models");

class CountryController {
  static async getAll(req, res) {
    try {
      const countries = await Country.findAll();
      res.send(countries);
    } catch {
      res.sendStatus(500);
    }
  }
}

module.exports = CountryController;
