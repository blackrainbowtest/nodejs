const { Sequelize } = require('sequelize');

// configuring Sequelize for my SQLite DB
const sequelize = new Sequelize({
  dialect: 'sqlite',            // DB type
  storage: './database.sqlite', // DB location
  logging: false,               // turn off logs in console
});

module.exports = sequelize;     // export configure