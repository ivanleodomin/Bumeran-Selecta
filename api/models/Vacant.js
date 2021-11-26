const S = require("sequelize");
const sequelize = require("../config/db");

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
    Vacant: {
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
    State: {
      type: S.STRING,
      defaultValue: "Iniciada",
    },
  },
  {
    sequelize,
    modelName: "Vacant",
  }
);

module.exports = Vacant;
