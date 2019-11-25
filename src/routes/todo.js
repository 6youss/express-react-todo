const { Router } = require("express");
const router = Router();

const TodoControler = require("../controlers/TodoControler");

router.post("/add",  TodoControler.addTodo );

module.exports = router;