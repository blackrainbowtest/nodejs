const express = require("express");
const multer = require("multer");
const path = require("path");
const Category = require("../models/Category");
const { serializeCategory } = require("../serializers/categorySerializer");

const router = express.Router();

// save file using multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // set folder for save data
    cb(null, "public/images/");
  },
  filename: (req, file, cb) => {
    // make random name
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// post route
router.post("/", upload.single("image"), async (req, res) => {
  const { name, gender } = req.body;
  const image = req.file ? `/images/${req.file.filename}` : null;

  try {
    // create new category
    const category = await Category.create({
      name,
      gender,
      image: `${process.env.BASE_URL || "http://localhost:5000"}${image}`,
    });

    const serializedCategorys = serializeCategory(category)

    res.status(201).json({
      message: "Category created successfully",
      category: serializedCategorys,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// post route
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();

    const categoriesWithImages = categories.map((category) => ({
      ...category.toJSON(),
      image: category.image,
    }));

    const serializedCategorys = [...categoriesWithImages.map((category => serializeCategory(category)))]

    res.json(serializedCategorys);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
