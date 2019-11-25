const Sequelize = require("sequelize");

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
  sequelize:sequelizeCon,
  modelName: 'TodoCategories'
});

// Note: using `force: true` will drop the table if it already exists
module.exports = TodoCategories.sync({
  // force: true
 });;