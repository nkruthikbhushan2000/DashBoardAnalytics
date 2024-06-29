const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
  end_year: String,
  intensity: Object,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: String,
  pestle: String,
  source: String,
  title: String,
  likelihood: Object,
});

const dataModel = mongoose.model("LearnMongo", DataSchema, "LearnMongo");

router.get("/", async (req, res) => {
  console.log(req.body);
  const data = await dataModel.find(req.body);
  res.json(data);
});

//API's to create filters for different parameters of JSON DATA

module.exports = router;
