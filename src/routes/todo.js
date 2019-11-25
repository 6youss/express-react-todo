const { Router } = require("express");
const router = Router();

const TodoControler = require("../controlers/TodoControler");

router.get("/",  TodoControler.getTodos );
router.post("/add",  TodoControler.addTodo );

module.exports = router;