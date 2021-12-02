const S = require("sequelize");
const sequelize = require("../config/db");

class Vacant extends S.Model {}

Vacant.init(
  {
    job: {
      type: S.STRING,
    },
    vacant: {
      type: S.INTEGER,
      validate: {
        isNumeric: true,
      },
    },
    description: {
      type: S.TEXT,
      validate: {
        min: 40,
        max: 513,
      },
    },
    state: {
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
