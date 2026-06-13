const asyncHandler = require("express-async-handler");
const Product = require("../models/Product");

const getProducts = async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const category = req.query.category
    ? {
        category: req.query.category,
      }
    : {};

  const products = await Product.find({
    ...keyword,
    ...category,
  });

  res.json(products);
};

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const addReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  product.reviews.push({
    name: "Customer",
    rating: Number(rating),
    comment,
  });

  product.numReviews = product.reviews.length;

  product.rating =
    product.reviews.reduce((acc, item) => acc + item.rating, 0) /
    product.reviews.length;

  await product.save();

  res.status(201).json({
    message: "Review Added Successfully",
  });
});

const createProduct = asyncHandler(async (req, res) => {
  const { name, image, brand, category, description, price, countInStock } =
    req.body;

  const product = await Product.create({
    name,
    image,
    brand,
    category,
    description,
    price,
    countInStock,
  });

  res.status(201).json(product);
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  product.name = req.body.name;
  product.price = req.body.price;
  product.brand = req.body.brand;
  product.category = req.body.category;
  product.description = req.body.description;
  product.countInStock = req.body.countInStock;
  product.image = req.body.image;

  const updatedProduct = await product.save();

  res.json(updatedProduct);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  await product.deleteOne();

  res.json({
    message: "Product deleted successfully",
  });
});

module.exports = {
  getProducts,
  getProductById,
  addReview,
  createProduct,
  updateProduct,
  deleteProduct,
};
