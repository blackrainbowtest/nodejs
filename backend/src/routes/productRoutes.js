const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Получение всех продуктов
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;