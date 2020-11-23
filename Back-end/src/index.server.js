const express = require("express");
const env = require("dotenv");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

//environment variable or you can say constants
env.config();

// mongoDB connection
//mongodb+srv://<username>:<password>@cluster0.bnlm5.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose
  .connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.bnlm5.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Databse connected");
  });

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello from server",
  });
});

app.post("/data", (req, res, next) => {
  res.status(200).json({
    message: req.body,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
