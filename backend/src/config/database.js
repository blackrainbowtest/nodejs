const { Sequelize } = require('sequelize');

// configuring Sequelize for my SQLite DB
const sequelize = new Sequelize({
  dialect: 'sqlite',            // DB type
  storage: './database.sqlite', // DB location
  logging: false,               // turn off logs in console
});

// sync DB
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced successfully');
}).catch(error => {
  console.error('Error syncing database:', error);
});

module.exports = sequelize;     // export configure