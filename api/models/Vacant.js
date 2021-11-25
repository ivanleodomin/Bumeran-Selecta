const S = require("sequelize");
const sequelize = require("../config/db/database");

class Vacant extends S.Model {}

Vacant.init(
  {
    Country: {
      type: S.STRING,
      allowNull: false,
    },
    Area: {
      type: S.STRING,
      allowNull: false,
    },
    Job: {
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
      State: {
        type: S.STRING,
        allowNull: false,
      },
    },
  },
  {
    sequelize,
    modelName: "Vacant",
  }
);

module.exports = Vacant;
