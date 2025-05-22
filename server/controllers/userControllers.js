const getProfile = (req, res) => {
  res.json({
    uid: req.dbUser.uid,
    email: req.dbUser.email,
    name: req.dbUser.name,
    isAdmin: req.dbUser.isAdmin,
  });
};

module.exports = { getProfile };
