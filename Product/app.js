const express = require("express");
require("./app/Models/index.js");
const router = require("./app/Routes/product.js");

const app = express();
app.use(express.json());
app.use("/", router);

module.exports = app;