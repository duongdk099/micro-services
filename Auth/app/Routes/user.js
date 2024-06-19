const express = require("express");
const router = express();
const checkRole = require("../MiddleWares/checkRole.js");
const auth = require("../MiddleWares/auth.js");
const userCtrl = require("../Controllers/user.js");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/adminOnly", auth,checkRole("admin"), (req, res) => {
  res.status(200).json({ message: "Welcome, admin!" });
});
router.get("/getUserInfoFromToken", auth, userCtrl.getUserInfoFromToken);

module.exports = router;