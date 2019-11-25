const Todos = require("../models/Todos");

module.exports = class TodoController {
  static async getTodos(req, res) {
    try {
      const todos = await Todos.findAll({
        attributes: ["id", "text"]
      });

      res.json({
        todos: todos || []
      });
    } catch (error) {
      res.status(500).json({
        message: "error: " + error
      });
    }
  }

  static async addTodo(req, res) {
    try {
      const newTodo = await Todos.create({ text: req.body.text }, { fields: ["text"] });
      res.json({
        message: "success",
        newTodo
      });
    } catch (error) {
      res.status(500).json({
        message: "error: " + error
      });
    }
  }
};
