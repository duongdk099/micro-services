module.exports = (requiredRole) => {
    return (req, res, next) => {
      try {
        if (req.userData.role !== requiredRole) {
          return res.status(403).json({ message: "Access denied" });
        }
        next();
      } catch (error) {
        return res.status(401).json({ message: "Auth failed" });
      }
    };
  };