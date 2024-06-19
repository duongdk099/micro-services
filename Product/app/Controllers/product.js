const Product = require("../Models/product.js");

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Some error occurred while creating product.",
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Some error occurred while getting products.",
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Some error occurred while getting products.",
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Some error occurred while updating product.",
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Some error occurred while deleting product.",
    });
  }
};
