const S = require("sequelize");
const sequelize = require("../config/db/database");

class Vacants extends S.Model {}

Vacants.init(
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
      /* RecruiterID: {
        type: S.INTEGER,
        allowNull: false,
        references: {
          model: "recluiter",
          key: "id",
        },
      }, */
    },
  },
  {
    sequelize,
    modelName: "vacants",
  }
);

module.exports = Vacants;
