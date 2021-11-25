const Recruiter = require("./Recruiter");
const Area = require("./Area");
const Seniority = require("./Seniority");
const Review = require("./Review");
const Vacant = require("./Vacant")
const Search = require("./Search");

Recruiter.belongsTo(Area, { as: "AreaOp1" });
Recruiter.belongsTo(Area, { as: "AreaOp2" });
Recruiter.belongsTo(Area, { as: "AreaOp3" });

Recruiter.belongsTo(Seniority, { as: "SeniorityOp1" });
Recruiter.belongsTo(Seniority, { as: "SeniorityOp2" });
Recruiter.belongsTo(Seniority, { as: "SeniorityOp3" });

Vacant.belongsTo(Area, { as: "Area"})
Vacant.belongsTo(Seniority, { as: "Job"})
/* Vacant.belongsTo(Recruiter, {as: }) */
Recruiter.hasMany(Search, { as: "Search" });
Vacant.belongsTo(Search, { as: "Search" });

module.exports = { Recruiter, Area, Seniority, Review, Vacant, Search };
