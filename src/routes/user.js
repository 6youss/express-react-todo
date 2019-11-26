const { Router } = require("express");
const router = Router();
const passport = require("../middlewares/passport");

const UserControler = require("../controlers/UserControler");

router.post("/login", passport.authenticate("local", { session: true }), UserControler.login);

module.exports = router;
