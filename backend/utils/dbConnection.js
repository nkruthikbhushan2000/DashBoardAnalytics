var mongoose = require("mongoose");
const mongoAtlasUri = process.env.DB_URI_STRING;
function mongooseConnection() {
  // Connect to the MongoDB cluster
  mongoose
    .connect(mongoAtlasUri)
    .then(() => console.log("Connected to database"))
    .catch((e) => {
      console.log("could not connect");
    });

  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
  dbConnection.once("open", () => console.log("Connected to DB!"));
}
module.exports = mongooseConnection;
