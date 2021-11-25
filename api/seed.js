const areas = require("./utils/fakedataAreas.json");
const seniorities = require("./utils/fakedataSeniorities.json");
const db = require("./config/db.js");
const { Area, Seniority, Recruiter } = require("./models");

db.sync()
  .then(() => Area.bulkCreate(areas))
  .then(() => Seniority.bulkCreate(seniorities))
  .then(() => {
    console.log("aggregated test data")    
    process.exit(0)
  })
  .catch((err) => {
    console.log("Somethin went wrong on the seed process", err.message);
    process.exit(1);
  });
