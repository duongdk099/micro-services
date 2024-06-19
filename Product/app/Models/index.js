const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_URI, { ssl: true }) // if ssl true => atals , false => otherwise
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
