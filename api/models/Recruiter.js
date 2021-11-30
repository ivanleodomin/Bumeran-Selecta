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
  },
  {
    sequelize: db,
    modelName: "Recruiter",
  }
);

Recruiter.prototype.getRanking = async function () {
  const reviews = await Review.findAll({
    where: {
      RecruiterId: this.id,
    },
  });
  if (!reviews.length) return 0;
  else {
    let acc = 0;
    reviews.forEach((element) => {
      acc += element.score
    });
    console.log(acc);
    return acc / reviews.length;
  }
};

module.exports = Recruiter;
