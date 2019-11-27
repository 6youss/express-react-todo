const { Router } = require("express");
const router = Router();
const passport = require("passport");

const UserControler = require("../controlers/UserControler");
router.post("/login", passport.authenticate("local"), UserControler.login);
router.post("/signup", UserControler.signup);

module.exports = router;
