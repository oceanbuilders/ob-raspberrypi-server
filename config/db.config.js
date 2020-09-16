const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USENAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  operatorsAliases: false,
 
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
 
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.table = require(`../models/table`)(sequelize, Sequelize);
 
module.exports = db;