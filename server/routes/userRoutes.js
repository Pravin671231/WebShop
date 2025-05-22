const express = require("express");
const { getProfile } = require("../controllers/userControllers");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/profile", protect, getProfile);

module.exports = router;
