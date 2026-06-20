const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// @route   GET /api/products
// @desc    Sare products laao
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/products/:id
// @desc    Ek product uski id se laao
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product nahi mila" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/products
// @desc    Naya product banao
router.post("/", async (req, res) => {
  try {
    const { name, price, category, image, stock, description } = req.body;

    if (!name || price === undefined) {
      return res.status(400).json({ message: "Name aur price zaroori hain" });
    }

    const product = new Product({ name, price, category, image, stock, description });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   PUT /api/products/:id
// @desc    Product update karo
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product nahi mila" });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   DELETE /api/products/:id
// @desc    Product delete karo
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product nahi mila" });
    }

    res.json({ message: "Product delete ho gaya", product: deletedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
