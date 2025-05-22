const admin = require("../firebase/firebase");
const User = require("../models/User");

const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;

    let user = await User.findOne({ uid: decodedToken.uid });
    if (!user) {
      user = await User.create({
        uid: decodedToken.uid,
        email: decodedToken.email,
        name: decodedToken.name || "Unnamed",
      });
    }

    req.dbUser.user;
    next();
  } catch (err) {
    console.error("Firebase token error", err.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = protect;
