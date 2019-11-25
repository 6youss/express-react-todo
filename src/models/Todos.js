const Sequelize = require("sequelize");
const sequelize = require("../config/db_connection");
class Todos extends Sequelize.Model {}

Todos.init(
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    text: {
      allowNull: false,
      type: Sequelize.STRING(300)
    }
    // category: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: "TodoCategories",
    //     key: "id"
    //   }
    // }
  },
  {
    sequelize,
    modelName: "Todos"
  }
);

module.exports = Todos;
