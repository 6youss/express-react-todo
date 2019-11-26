const { Router } = require("express");
const router = Router();

const TodoControler = require("../controlers/TodoControler");

router.get("/", TodoControler.getTodos);
router.post("/", TodoControler.addTodo);
router.put("/:id", TodoControler.editTodo);

module.exports = router;
