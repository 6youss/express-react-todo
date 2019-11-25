const Sequelize = require("sequelize");

class Todos extends Sequelize.Model {}

Todos.init(
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    text: Sequelize.STRING(300),
    category: {
      type: Sequelize.INTEGER,
      references: {
        model: "TodoCategories",
        key: "id"
      }
    }
  },
  {
    sequelize: sequelizeCon,
    modelName: "Todos"
  }
);

// Note: using `force: true` will drop the table if it already exists
module.exports = Todos.sync({
  // force: true
});

module.exports.model = Todos;
