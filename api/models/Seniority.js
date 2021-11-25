const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Seniority extends Model {}

Seniority.init(
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    db,
    modelName: "Recruiter",
  }
);

module.exports = Seniority;
