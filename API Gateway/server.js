const express = require("express");
const app = express();
const proxy = require("express-http-proxy");

app.use("/api/auth", proxy("http://localhost:8081"));

app.listen(3000, () => console.log("Listening on port 3000"));
