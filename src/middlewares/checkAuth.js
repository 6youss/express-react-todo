module.exports = function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({
    url: req.originalUrl,
    message: "user not authenticated"
  });
};
