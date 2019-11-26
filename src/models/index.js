const TodoCategories = require("./TodoCategories");
const TodoModel = require("./Todos");
const UserModel = require("./Users");
const sequelizeCon = require("../config/db_connection");
async function setupDatabase() {
  try {
    // Note: using `force: true` will drop the table if it already exists
    await sequelizeCon.authenticate();
    await Promise.all([
      TodoCategories.sync({
        // force:true
      }),
      TodoModel.sync({
        // force: true
      }),
      UserModel.sync({
        // force: true
      })
    ]);
    //add a default user
    await UserModel.findOrCreate({ where: { username: "admin" }, defaults: { password: "admin" } });
  } catch (e) {
    throw e;
  }
}

module.exports = setupDatabase;
