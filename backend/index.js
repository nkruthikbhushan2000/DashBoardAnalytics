const express = require("express");
const app = express();
const dashsBoardRoute = require("./routes/dashBoard");
const dotenv = require("dotenv");
dotenv.config();
const dbConnection = require("./utils/dbConnection"); //Importing DB connection
const bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.use("/", dashsBoardRoute);
app.use("/dashboard", dashsBoardRoute);

app.use((_, res) => {
  //What is the empty _ paased in func ?
  res.send({
    message: "Not found!",
  });
});

//Test push request
//Test Push request secound time

//Connect to DB
dbConnection();

app.listen(5000, (req, res) => {
  console.log("Server is listening on port 5000");
});

/**
 * What is express.js in nodejs project?
 * what is bodyParser?
 * What is cors ? Cors error
 * What is mongoose and mongoclient ? Difference
 */
