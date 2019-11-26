let passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

let UserModel = require("../models/Users");

passport.use(
  new LocalStrategy(async function(username, password, done) {
    const user = await UserModel.findOne({ where: { username } });
    if (user && user.password === password) done(null, user);
    else done(null, false, user);
  })
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;
