const { Router } = require("express");
const routes = Router();
const todo = require("./todo");
const user = require("./user");

routes.use("/todo", todo);
routes.use("/user", user);

module.exports = routes;
