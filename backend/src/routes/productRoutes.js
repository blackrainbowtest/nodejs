const express = require("express");
const multer = require("multer");
const path = require("path");
const Product = require("../models/Product");
const { serializeProduct } = require("../serializers/productSerializer")

const router = express.Router();


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