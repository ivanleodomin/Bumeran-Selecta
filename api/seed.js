const areas = require("./utils/fakedataAreas.json");
const seniorities = require("./utils/fakedataSeniorities.json");
const vacants = require("./utils/fakedataVacants.json")
const countries = require("./utils/Countries.json")
const db = require("./config/db.js");
const { Area, Seniority, Country, Vacant } = require("./models");

db.sync()
  .then(() => Country.bulkCreate(countries))
  .then(() => Area.bulkCreate(areas))
  .then(() => Seniority.bulkCreate(seniorities))
  .then(() => Vacant.bulkCreate(vacants))
  .then(() => {
    console.log("aggregated test data")    
    process.exit(0)
  })
  .catch((err) => {
    console.log("Somethin went wrong on the seed process", err.message);
    process.exit(1);
  });
