const db = require("./config/db.js");
const areas = require("./utils/Areas.json");
const seniorities = require("./utils/Seniorities.json");
const countries = require("./utils/Countries.json");
const vacants = require("./utils/fakedataVacants.json");
const { Area, Seniority, Country, Vacant, City } = require("./models");

async function seed() {
  try {
    await db.sync();

    for (let country of countries) {
      await Country.create({ name: country.name });

      for (let city of country.cities) {
        const instance = await Country.findOne({
          where: { name: country.name },
        });
        const newCity = await City.create({ name: city });
        await newCity.setCountry(instance);
      }
    }

    await Area.bulkCreate(areas);
    await Seniority.bulkCreate(seniorities);
    await Vacant.bulkCreate(vacants);

    console.log("aggregated test data");
    return process.exit(0);
  } catch (err) {
    console.log("Somethin went wrong on the seed process", err.message);
    return process.exit(1);
  }
}

seed();
