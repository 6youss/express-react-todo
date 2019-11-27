const passport = require("passport");
const localStrategy = require("./strategies/local.strategy");

const UserModel = require("../models/Users");

module.exports = function configPassport(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(localStrategy);

  //store user in session
  passport.serializeUser((user, done) => {
    console.log("serialise: " + user.id);

    done(null, user);
  });

  //get the user from the session
  passport.deserializeUser(async (user, done) => {
    console.log("deserialise: " + user.id);
    try {
      // const user = await UserModel.findOne({ where: { id: userId } });
      console.log(user);
      done(null, user);
    } catch (err) {
      done(err, user);
    }
  });
};
