const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");
const Review = require("./Review");

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
    ranking: {
      type: DataTypes.VIRTUAL,
      get() {
        return Review.findAll({
          where: {
            recluiterId: this.getDataValue("id"),
          },
        }).then((reviews) => {
          let acc = 0;
          reviews.forEach((element) => {
            acc += element.score;
          });
          return acc / reviews.length;
        });
      },
    },
  },
  {
    sequelize: db,
    modelName: "Recruiter",
  }
);

module.exports = Recruiter;
