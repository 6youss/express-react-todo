const Sequelize = require("sequelize");

const sequelizeCon = new Sequelize("todo_node", "root", 'e"e"', {
  host: "localhost",
  dialect: "mysql",
  logging: false
});

sequelizeCon
  .authenticate()
  .then(() => {
    console.log('DB Connected.');
  })
  .catch(err => {
    console.error('DB connect error: ', err);
  });

module.exports = sequelizeCon;
global.sequelizeCon = sequelizeCon;

// const mysql      = require('mysql');
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'e"e"',
//   database : 'todo_node'
// });

// connection.connect();

// module.exports = connection;
