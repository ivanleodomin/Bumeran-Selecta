const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Area extends Model {}

Area.init(
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

module.exports = Area;
