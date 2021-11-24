const express = require("express");
const app = express();
/* const db = require("./config/db"); */
const routes = require("./routes");

const volleyball = require("volleyball");

//middlewares
app.use(volleyball);
app.use(express.json());
/* app.use(express.urlencoded({ extended: true })); */

/* app.use("/api", routes) */
app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("listening port 3000");
});
