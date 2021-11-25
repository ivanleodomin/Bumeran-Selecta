const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Review extends Model {}

Review.init(
  {
    score: {
      type: DataTypes.INTEGER,
    },
  },
  {
    db,
    modelName: "Recruiter",
  }
);

module.exports = Review;
