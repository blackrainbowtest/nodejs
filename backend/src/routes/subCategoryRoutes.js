const express = require("express");
const SubCategory = require("../models/SubCategory");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const subcategories = await SubCategory.findAll();
    res.json(subcategories);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;