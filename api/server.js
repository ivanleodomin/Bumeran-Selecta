const express = require("express");
const app = express();
const db = require("./config/db");
const routes = require("./routes");
const volleyball = require("volleyball");

//middlewares
app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use("/api", routes) 

db.sync({ force: true }).then(() =>
  app.listen(3001, () => {
    console.log("listening port 3001");
  })
);
