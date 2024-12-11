const express = require("express");
const SubCategory = require("../models/SubCategory");
const {serializeSubCategory} = require("../serializers/subCategorySerializer")

const router = express.Router();

// get route
router.get("/", async (req, res) => {
  try {
    const subcategories = await SubCategory.findAll();
    const serializedSubCategorys = [...subcategories.map((subCategory) => serializeSubCategory(subCategory))]
    res.json(serializedSubCategorys);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// post route
router.post("/", async (req, res) => {
  const { name, parent } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  try {
    // create new subCategory
    const subCategory = await SubCategory.create({name, parent,});

    res.status(201).json({
      message: "SubCategory created successfully",
      subCategory,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;