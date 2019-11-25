const TodoCategories = require("./TodoCategories");
const TodoModel = require("./Todos");

module.exports = async function setupDatabase() {
  try {
    require("../config/db_connection");

    // Note: using `force: true` will drop the table if it already exists
    await TodoCategories.sync({
      // force:true
    });
    await TodoModel.sync({
      // force:true
    });
    
    console.log("DB Sync done.");
  } catch (e) {
    throw e;
  }
};
