const { Strategy, ExtractJwt } = require("passport-jwt");

const UserModel = require("../../models/Users");

module.exports = new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_ACCESS
  },
  async function(jwtPayload, done) {
    //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
    try {
      const user = await UserModel.findOne({ where: { id: jwtPayload.id } });
      if (user) done(null, user);
      else done(null, false, user);
    } catch (error) {
      done(error);
    }
  }
);
