const express = require("express");

const {
  getProducts,
  getProductById,
  addReview,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// Get All Products & Create Product
router.route("/").get(getProducts).post(createProduct);

// Add Review
router.post("/:id/reviews", addReview);

// Get Single Product, Update Product, Delete Product
router
  .route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
