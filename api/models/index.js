const Recruiter = require("./Recruiter");
const Area = require("./Area");
const Seniority = require("./Seniority");
const Review = require("./Review");
const Vacant = require("./Vacant");

Vacant.belongsTo(Recruiter, { as: "Recruiter"}) 

Recruiter.belongsTo(Area, { as: "AreaOp1" });
Recruiter.belongsTo(Area, { as: "AreaOp2" });
Recruiter.belongsTo(Area, { as: "AreaOp3" });

Recruiter.belongsTo(Seniority, { as: "SeniorityOp1" });
Recruiter.belongsTo(Seniority, { as: "SeniorityOp2" });
Recruiter.belongsTo(Seniority, { as: "SeniorityOp3" });

Recruiter.hasMany(Review, { as: "Review"})
Review.belongsTo(Vacant, { as: "Vacant"})   


module.exports = { Recruiter, Area, Seniority, Review, Vacant };
