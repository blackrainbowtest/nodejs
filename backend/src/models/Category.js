const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Category = sequelize.define("Category", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING, // Путь к изображению
    allowNull: false,
  },
  gender: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Category;