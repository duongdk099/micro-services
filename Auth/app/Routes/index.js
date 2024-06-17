const express = require("express");
const userRoutes = require("./user.js");

const router = express();
router.use("/", userRoutes);

module.exports = router;
