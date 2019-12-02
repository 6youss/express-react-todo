const passport = require("passport");
const localStrategy = require("./strategies/local.strategy");
const jwtStrategy = require("./strategies/jwt.strategy");

const UserModel = require("../models/Users");

module.exports = function configPassport(app) {
  app.use(passport.initialize());
  passport.use(localStrategy);
  passport.use(jwtStrategy);
};
