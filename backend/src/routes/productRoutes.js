const express = require("express");
const upload = require("../utils/multer");
const Product = require("../models/Product");
const { serializeProduct } = require("../serializers/productSerializer");

const router = express.Router();

// POST
router.post("/", upload.array("images", 4), async (req, res) => {
  const {
    article,
    tags,
    golds,
    price,
    stones,
    works,
    userId,
    currentTime,
    gender,
    category,
    subcategory,
  } = req.body;
  console.log("Received data:", req.body);
  
  if (
    !article ||
    !tags ||
    !golds ||
    !stones ||
    !works ||
    !currentTime ||
    !gender
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const parsedGolds = tryParseJSON(golds);
  const parsedStones = tryParseJSON(stones);
  const parsedWorks = tryParseJSON(works);
  const parsedPrice = tryParseJSON(price);
  const parsedTags = tryParseJSON(tags);

  if (
    !article ||
    !tags ||
    !parsedGolds ||
    !parsedStones ||
    !parsedWorks ||
    !currentTime ||
    !gender
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const image = req.files
    ? req.files.map((file) => `${process.env.BASE_URL || "http://localhost:5000"}/images/${file.filename}`)
    : [];

  try {
    const product = await Product.create({
      article,
      tags: parsedTags,
      golds: parsedGolds,
      price: parsedPrice,
      stones: parsedStones,
      works: parsedWorks,
      currentTime,
      gender: gender,
      category,
      subcategory,
      images: image,
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

function tryParseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    return null;
  }
}

// GET
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();

    const serializedProducts = products.map((product) =>
      serializeProduct(product)
    );

    res.json(serializedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
