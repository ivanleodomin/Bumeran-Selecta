const db = require("./config/db.js");
const getareas = require("./utils/getInstancesAreas");
const getSeniorities = require("./utils/getInstancesSeniorities");
const areas = require("./utils/Areas.json");
const seniorities = require("./utils/Seniorities.json");
const countries = require("./utils/Countries.json");
const vacants = require("./utils/fakedataVacants.json");
const recruiters = require("./utils/fakedataRecruiters.json");
const {
  Area,
  Seniority,
  Country,
  Vacant,
  City,
  Recruiter,
} = require("./models");

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

    for (let vacante of vacants) {
      const { areaId, cityId, countryId } = vacante;
      const vacant = await Vacant.create(vacante);
      const city = await City.findByPk(cityId);
      const country = await Country.findByPk(countryId);
      const area = await Area.findByPk(areaId);
      await vacant.setCity(city);
      await vacant.setArea(area);
      await vacant.setCountry(country);
    }

    for (let recruiter of recruiters) {
      const {
        firstName,
        lastName,
        cityId,
        countryId,
        areaOp1,
        areaOp2,
        areaOp3,
        seniorityOp1,
        seniorityOp2,
        seniorityOp3,
      } = recruiter;

      const [area1, area2, area3] = await getareas([areaOp1, areaOp2, areaOp3]);

      const [sen1, sen2, sen3] = await getSeniorities([
        seniorityOp1,
        seniorityOp2,
        seniorityOp3,
      ]);
      const city = await City.findByPk(cityId);
      const country = await Country.findByPk(countryId);

      const newRec = await Recruiter.create({
        firstName,
        lastName,
      });
      newRec.setCountry(country);
      newRec.setCity(city);

      newRec.setAreaOp1(area1);
      newRec.setAreaOp2(area2);
      newRec.setAreaOp3(area3);

      newRec.setSeniorityOp1(sen1);
      newRec.setSeniorityOp2(sen2);
      newRec.setSeniorityOp3(sen3);
    }

    console.log("aggregated test data");
    return process.exit(0);
  } catch (err) {
    console.log("Somethin went wrong on the seed process", err.message);
    return process.exit(1);
  }
}

seed();
