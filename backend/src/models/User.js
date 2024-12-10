const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  registerDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  lastLoginDate: {
    type: DataTypes.DATE,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = User;