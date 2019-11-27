const { Router } = require("express");
const router = Router();

const TodoControler = require("../controlers/TodoControler");
const checkAuth = require("../middlewares/checkAuth");

router.get("/", checkAuth, TodoControler.getTodos);
router.post("/", TodoControler.addTodo);
router.put("/:id", TodoControler.editTodo);

module.exports = router;
