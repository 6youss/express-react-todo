const { Router } = require("express");
const router = Router();
const passport = require("passport");

const UserControler = require("../controlers/UserControler");

router.post("/login", passport.authenticate("local", { session: false }), UserControler.login);
router.post("/signup", UserControler.signup);
router.post("/token", UserControler.refreshToken);

module.exports = router;
