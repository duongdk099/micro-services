const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI, { ssl: false }) // if ssl true => atals , false => otherwise
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
