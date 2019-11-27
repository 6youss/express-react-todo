const { Strategy } = require("passport-local");

const UserModel = require("../../models/Users");

module.exports = new Strategy(
  {
    usernameField: "username",
    passwordField: "password"
  },
  async (username, password, done) => {
    const user = await UserModel.findOne({ where: { username } });
    if (user && user.password === password) done(null, user);
    else done(null, false, user);
  }
);
