const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Recruiter extends Model {}

Recruiter.init(
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    residence: {
      type: DataTypes.STRING,
    },
    reviewsId: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
    },
    busquedas: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: [],
    },
  },
  {
    db,
    modelName: "Recruiter",
  }
);

module.exports = Recruiter;
