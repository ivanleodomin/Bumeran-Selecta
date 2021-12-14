const S = require("sequelize");
const sequelize = require("../config/db");

class Vacant extends S.Model {}

Vacant.init(
  {
    title: {
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
    startDate: {
      type: S.STRING,
    },
    finishtDate: {
      type: S.STRING,
    },
    assignmentDate: {
      type: S.STRING,
    },
  },
  {
    sequelize,
    modelName: "Vacant",
    timestamps: false,
  }
);

Vacant.beforeCreate(async (vacant) => {
  vacant.startDate = new Date().toISOString().split("T")[0];
});

module.exports = Vacant;
