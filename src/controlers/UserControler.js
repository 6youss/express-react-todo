const UserModel = require("../models/Users");
const jwt = require("jsonwebtoken");

module.exports = class UserController {
  static async login(req, res) {
    try {
      const { user } = req;
      if (!user) {
        return res.sendStatus(400);
      }
      const accessToken = jwt.sign(user, process.env.JWT_ACCESS, { expiresIn: "30s" });
      const refreshToken = jwt.sign(user, process.env.JWT_REFRESH);
      const updated = await UserModel.update({ refreshToken }, { where: { id: user.id } });
      if (updated[0] === 0) return res.sendStatus(500);
      return res.json({ user, accessToken, refreshToken, updated });
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  static async refreshToken(req, res) {
    try {
      const token = req.body.token;
      if (!token) return res.sendStatus(401);
      const user = await UserModel.findOne({ where: { refreshToken: token } });
      if (!user) return res.sendStatus(403);
      const { refreshToken } = user;
      jwt.verify(refreshToken, process.env.JWT_REFRESH, (err, user) => {
        if (err) return res.sendStatus(403);
        const accessToken = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_ACCESS, {
          expiresIn: "30s"
        });
        return res.json({ accessToken });
      });
    } catch (e) {
      res.sendStatus(500);
    }
  }

  static signup(req, res) {
    res.status(200).json({
      message: "signup success",
      user: req.body
    });
  }
};
