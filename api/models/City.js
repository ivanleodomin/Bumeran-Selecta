const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class City extends Model {}

City.init(
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "City",
  }
);

module.exports = City;