const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");
const { Recruiter } = require("./Recruiter");

class Review extends Model {}

Review.init(
  {
    score: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: "Review",
  }
);

module.exports = Review;
