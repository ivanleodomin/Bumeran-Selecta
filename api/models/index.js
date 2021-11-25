const Recruiter = require("./Recruiter");
const Area = require("./Area");
const Seniority = require("./Seniority");
const Review = require("./Review");
const Vacant = require("./Vacant")

Recruiter.belongsTo(Area, { as: "AreaOp1" });
Recruiter.belongsTo(Area, { as: "AreaOp2" });
Recruiter.belongsTo(Area, { as: "AreaOp3" });

Recruiter.belongsTo(Seniority, { as: "SeniorityOp1" });
Recruiter.belongsTo(Seniority, { as: "SeniorityOp2" });
Recruiter.belongsTo(Seniority, { as: "SeniorityOp3" });

Vacant.belongsTo(Area, { as: "Area"})
Vacant.belongsTo(Seniority, { as: "Job"})
/* Vacant.belongsTo(Recruiter, {as: }) */


module.exports = { Vacant ,Recruiter, Area, Seniority, Review };
