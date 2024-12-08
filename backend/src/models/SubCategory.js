const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SubCategory = sequelize.define("SubCategory", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  parent: {
    type: DataTypes.STRING,
    references: {
      model: "Categories",
      key: "id",
    },
  },
});

module.exports = SubCategory;
