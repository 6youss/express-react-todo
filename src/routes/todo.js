const { Router } = require("express");
const router = Router();
const TodoControler = require("../controlers/TodoControler");
const passport = require("passport");
router.get("/", passport.authenticate("jwt", { session: false }), TodoControler.getTodos);
router.post("/", TodoControler.addTodo);
router.put("/:id", TodoControler.editTodo);

module.exports = router;
