const express = require("express");
const router = express.Router();
const products = require("../data/products.json");
const categories = require("../data/categories.json");

// Helper function to enrich product with category data
const enrichProductWithCategory = (product) => {
  if (!product.category || !product.category.id) {
    return product;
  }

  // Cari kategori berdasarkan ID
  const category = categories.find((cat) => cat.id === product.category.id);
  if (category) {
    product.category = category;
  }
  return product;
};

// GET all products with optional filters
router.get("/", (req, res) => {
  const { categoryId, isFiatured } = req.query;

  let filteredProducts = products.map(enrichProductWithCategory);

  // Filter berdasarkan categoryId
  if (categoryId) {
    filteredProducts = filteredProducts.filter(
      (prodak) => prodak.category.id === categoryId
    );
  }

  // Filter berdasarkan isFiatured
  if (isFiatured) {
    filteredProducts = filteredProducts.filter(
      (prodak) => prodak.isFiatured === (isFiatured === "true")
    );
  }

  res.json(filteredProducts);
});

// GET product by ID
router.get("/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((prod) => prod.id === productId);

  if (product) {
    const enrichedProduct = enrichProductWithCategory(product);
    res.json(enrichedProduct);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

module.exports = router;
