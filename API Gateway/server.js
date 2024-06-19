const express = require("express");
const app = express();
const proxy = require("express-http-proxy");
const authMiddleware = require("./authMiddleWare.js");

app.use("/api/auth", proxy("http://auth:8081"));
app.use("/api/product",authMiddleware, proxy("http://product:8082"));

app.listen(3000, () => console.log("Listening on port 3000"));
