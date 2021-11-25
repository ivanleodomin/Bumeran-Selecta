const Sequelize = require("sequelize");
const config = require("./config.db.json");

const db = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: config.logging,
});

module.exports = db;