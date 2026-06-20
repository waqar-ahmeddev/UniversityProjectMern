const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Product = require("../models/Product");

// Hum sessionId ko query/body se le rahe hain (login nahi hai isliye).
// Agar login add karo to isko req.user.id se replace kar dena.

// @route   GET /api/cart/:sessionId
// @desc    Cart laao
router.get("/:sessionId", async (req, res) => {
  try {
    let cart = await Cart.findOne({ sessionId: req.params.sessionId });

    if (!cart) {
      cart = { sessionId: req.params.sessionId, items: [] };
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/cart/:sessionId
// @desc    Cart mein product add karo (agar already hai to quantity badhao)
router.post("/:sessionId", async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId) {
      return res.status(400).json({ message: "productId zaroori hai" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product nahi mila" });
    }

    let cart = await Cart.findOne({ sessionId: req.params.sessionId });

    if (!cart) {
      cart = new Cart({ sessionId: req.params.sessionId, items: [] });
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity || 1;
    } else {
      cart.items.push({
        product: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity || 1,
      });
    }

    const savedCart = await cart.save();
    res.status(201).json(savedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   PUT /api/cart/:sessionId/:productId
// @desc    Cart item ki quantity update karo
router.put("/:sessionId/:productId", async (req, res) => {
  try {
    const { quantity } = req.body;

    const cart = await Cart.findOne({ sessionId: req.params.sessionId });
    if (!cart) {
      return res.status(404).json({ message: "Cart nahi mila" });
    }

    const item = cart.items.find(
      (item) => item.product.toString() === req.params.productId
    );

    if (!item) {
      return res.status(404).json({ message: "Cart mein yeh item nahi mila" });
    }

    item.quantity = quantity;

    const savedCart = await cart.save();
    res.json(savedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   DELETE /api/cart/:sessionId/:productId
// @desc    Cart se ek item remove karo
router.delete("/:sessionId/:productId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ sessionId: req.params.sessionId });
    if (!cart) {
      return res.status(404).json({ message: "Cart nahi mila" });
    }

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== req.params.productId
    );

    const savedCart = await cart.save();
    res.json(savedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   DELETE /api/cart/:sessionId
// @desc    Pura cart khali karo
router.delete("/:sessionId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ sessionId: req.params.sessionId });
    if (!cart) {
      return res.status(404).json({ message: "Cart nahi mila" });
    }

    cart.items = [];
    const savedCart = await cart.save();
    res.json(savedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
