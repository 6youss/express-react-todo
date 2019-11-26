const Todos = require("../models/Todos");

module.exports = class TodoController {
  static async getTodos(req, res) {
    console.log({ user: req });
    try {
      const todos = await Todos.findAll({
        attributes: ["id", "text", "done"]
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
        newTodo
      });
    } catch (error) {
      res.status(500).json({
        message: "error: " + error
      });
    }
  }

  static async editTodo(req, res) {
    try {
      const id = req.params.id;
      // Check if record exists
      const todo = await Todos.findOne({ where: { id } });
      const newTodo = await todo.update(req.body);
      res.json({
        newTodo
      });
    } catch (error) {
      res.status(500).json({
        message: "error: " + error
      });
    }
  }
};
