const { Router } = require("express");
const routes = Router();
const todo = require("./todo");

routes.use("/todo", todo);

module.exports = routes;
