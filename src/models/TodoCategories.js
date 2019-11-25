const Sequelize = require("sequelize");
const sequelize = require("../config/db_connection");
class TodoCategories extends Sequelize.Model {}

TodoCategories.init({
  id: {
    type:Sequelize.INTEGER(11),
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
  },
  name: Sequelize.STRING(300)
}, {
  sequelize,
  modelName: 'TodoCategories'
});

// Note: using `force: true` will drop the table if it already exists
module.exports = TodoCategories;