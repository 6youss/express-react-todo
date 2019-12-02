const Sequelize = require("sequelize");

const sequelizeCon = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: false
});

module.exports = sequelizeCon;
