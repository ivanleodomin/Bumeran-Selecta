const S = require("sequelize");
const sequelize = require("../config/db");

class Vacant extends S.Model {}

Vacant.init(
  {
    Country: {
      type: S.STRING,
      allowNull: false,
    },
    Vacants: {
      type: S.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    Description: {
      type: S.TEXT,
      allowNull: false,
      validate: {
        min: 40,
      },
    },
  },
  {
    sequelize,
    modelName: "vacant",
  }
);

module.exports = Vacant;
