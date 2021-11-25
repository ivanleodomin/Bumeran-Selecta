const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");

class Search extends Model {}

Search.init(
  {
    state: {
      //Iniciada/Suspendida/Cubierta/]
      type: DataTypes.STRING,
      default: false,
    },
  },
  {
    sequelize: db,
    modelName: "Search",
  }
);

module.exports = Search;
