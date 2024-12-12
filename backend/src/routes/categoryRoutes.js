const express = require("express");
const upload = require("../utils/multer");
const path = require("path");
const Category = require("../models/Category");
const { serializeCategory } = require("../serializers/categorySerializer");

const router = express.Router();

// post route
router.post("/", upload.single("image"), async (req, res) => {
  const { name, gender } = req.body;
  const image = req.file ? `${process.env.BASE_URL || "http://localhost:5000"}/images/${req.file.filename}` : null;

  try {
    // create new category
    const category = await Category.create({
      name,
      gender,
      image,
    });

    const serializedCategorys = serializeCategory(category);

    res.status(201).json({
      message: "Category created successfully",
      category: serializedCategorys,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// get route
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();

    const serializedCategories = categories.map((category) =>
      serializeCategory(category.toJSON())
    );

    res.json(serializedCategories);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
