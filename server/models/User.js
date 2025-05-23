const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    uid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
