module.exports = async function setupDatabase(){
  try{
    require("../config/db_connection");
    await require("./TodoCategories");
    await require("./Todo");
    console.log("DB Sync done.")
  }catch(e){
    throw e
  }
}