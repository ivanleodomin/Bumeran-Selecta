const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Country extends Model {}

Country.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
    }
  },
  {
    sequelize: db,
    modelName: "Country",
  }
);

module.exports = Country;