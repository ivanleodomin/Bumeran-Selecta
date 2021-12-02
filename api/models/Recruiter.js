const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");
const Review = require("./Review");
const City = require("./City");
const Country = require("./Country");

class Recruiter extends Model {}

Recruiter.init(
  {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    country: {
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
      acc += element.score;
    });
    console.log(acc / reviews.length);
    return acc / reviews.length;
  }
};

Recruiter.getBests = async function (vacant) {
  /* id | job | vacant | description | state |
   createdAt | updatedAt | RecruiterId | CityId | AreaId
   */

  const city = await City.findOne({
    attributes:["CountryId"],
    where: { id: vacant.CityId },
  })


  console.log("city", city);
  // Recruiter.findAll({where: { id: id } })
};

module.exports = Recruiter;
