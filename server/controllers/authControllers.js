const admin = require("../firebase/firebase");
const User = require("../models/User");

// @desc    Sync Firebase user to DB
// @route   POST /api/auth/login

const loginUser = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token missing" });
  try {
    const decoded = await admin.auth().verifyIdToken(token);
    const { uid, email, name, picture } = decoded;

    let user = await User.findOne({ uid });
    if (!user) {
      user = await User.create({
        uid,
        email,
        name: name || "Unamed User",
        avatar: picture || null,
      });
    }
    res.status(201).json({
      uid: user.uid,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    res.status(401).json({ message: "Invalid Firebase token" });
  }
};

module.exports = { loginUser };
