const passport = require("passport");
const localStrategy = require("./strategies/local.strategy");

const UserModel = require("../models/Users");

module.exports = function configPassport(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(localStrategy);

  //store user in session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  //get the user from the session
  passport.deserializeUser(async (userId, done) => {
    try {
      const user = await UserModel.findOne({ where: { id: userId } });
      done(null, user);
    } catch (err) {
      done(err, user);
    }
  });
};
