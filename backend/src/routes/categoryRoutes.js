const express = require("express");
const multer = require("multer");
const path = require("path");
const Category = require("../models/Category");

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
  }
});

const upload = multer({ storage });

// 
router.post("/", upload.single("image"), async (req, res) => {
  const { name, gender } = req.body;
  const image = req.file ? `/images/${req.file.filename}` : null;

  try {
    // create new category
    const category = await Category.create({
      name,
      gender,
      image
    });

    res.json({
      message: "Category created successfully",
      category
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;