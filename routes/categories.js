const express = require("express");
const router = express.Router();
const categories = require("../data/categories.json");

// GET all categories
router.get("/", (req, res) => {
  res.json(categories);
});

// GET category by ID
router.get("/:id", (req, res) => {
  const category = categories.find((cat) => cat.id === req.params.id);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
});

module.exports = router;
