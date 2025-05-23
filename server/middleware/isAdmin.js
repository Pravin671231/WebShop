const User = require("../models/User");

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({ uid: req.user.uid });

    if (user && isAdmin) {
      next();
    } else {
      res.status(403).json({ message: "Admin access only" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = isAdmin;
