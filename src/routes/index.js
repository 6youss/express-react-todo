const { Router } = require("express");
const routes = Router();
const todo = require("./todo");

routes.use("/todo", todo);

routes.get("/", function(req, res) {  
  res.render("pages/index");
});

module.exports = routes;
