const axios = require("axios");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const response = await axios.get(
      "http://localhost:3000/api/auth/getUserInfoFromToken",
      {
        headers: {
          Authorization: token,
        },
      }
    );

    console.log(response.data.role);

    if (response.data.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Access denied. Admins only."});
    }

    next();
  } catch (error) {
    if (error.response && error.response.status === 401) {
      return res.status(401).json({ message: "Invalid token." });
    }
    if (error.response && error.response.status === 403) {
      return res.status(403).json({ message: "Access denied." });
    }
    console.error("Error validating token:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = authMiddleware;
