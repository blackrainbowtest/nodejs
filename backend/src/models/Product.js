const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true,
  },
  article: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tags: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  images: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  golds: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  price: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  stones: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  works: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING,
    references: {
      model: "Users",
      key: "id",
    },
  },
  currentTime: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    references: {
      model: "Categories",
      key: "id",
    },
  },
  subcategory: {
    type: DataTypes.STRING,
    references: {
      model: "SubCategories",
      key: "id",
    },
  },
});

module.exports = Product;
