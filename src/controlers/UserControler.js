const Users = require("../models/Users");

module.exports = class UserController {
  static async login(req, res) {
    try {
      res.json({
        message: `welcom ${req.body.username} !`
      });
    } catch (error) {
      res.status(500).json({
        message: "error: " + error
      });
    }
  }

  static async signup(req, res) {
    res.status(200).json({
      message: "signup success",
      user: req.body
    });
  }
};
