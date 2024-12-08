const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const SubCategory = sequelize.define("SubCategory", {
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
  parent: {
    type: DataTypes.STRING,
    references: {
      model: "Categories",
      key: "id",
    },
  },
});

module.exports = SubCategory;
