const Recruiter = require("./Recruiter");
const Area = require("./Area");
const Seniority = require("./Seniority");
const Review = require("./Review");
const Vacanst = require("./Vacant");
const Search = require("./Search");

Recruiter.belongsTo(Area, { as: "AreaOp1" });
Recruiter.belongsTo(Area, { as: "AreaOp2" });
Recruiter.belongsTo(Area, { as: "AreaOp3" });

Recruiter.belongsTo(Seniority, { as: "SeniorityOp1" });
Recruiter.belongsTo(Seniority, { as: "SeniorityOp2" });
Recruiter.belongsTo(Seniority, { as: "SeniorityOp3" });

Recruiter.hasMany(Search, { as: "Search" });
Vacanst.belongsTo(Search, { as: "Search" });

module.exports = { Recruiter, Area, Seniority, Review, Vacanst, Search };
