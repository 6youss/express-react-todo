const TodoCategories = require("./TodoCategories");
const TodoModel = require("./Todos");
const sequelizeCon = require("../config/db_connection");
async function setupDatabase() {
  try {
    // Note: using `force: true` will drop the table if it already exists
    return Promise.all([
      sequelizeCon.authenticate(),
      TodoCategories.sync({
        // force:true
      }),
      TodoModel.sync({
        // force: true
      })
    ]);
  } catch (e) {
    throw e;
  }
}

module.exports = setupDatabase;
