const bcrypt = require("bcrypt");
const User = require("../Models/user.js");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = new User({
      email: email,
      password: password,
      role: role, // Add this line to accept role during signup
    });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Some error occurred while creating user.",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password." });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.TOKEN_SECRET,
      {
        expiresIn: Number(process.env.TOKEN_EXPIRATION),
      }
    );

    res.status(200).json({ token, user });
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Some error occurred while connected user.",
    });
  }
};
exports.getUserInfoFromToken = (req, res) => {
  res.status(200).json({ id: req.auth.id, role: req.auth.role });
};
