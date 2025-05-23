const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/isAdmin");
const Product = require("../models/Product");
//create product admin only
router.post("/", protect, isAdmin, async (req, res) => {
  try {
    const newProduct = new Product({ ...req.body, createdBy: req.user.uid });
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Error fecthing product" });
  }
});

//update product (Admin only)
router.put("/:id", protect, isAdmin, async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "update failed" });
  }
});

//Delete product (Admin only)
router.delete(":id", protect, isAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Deletion failed" });
  }
});

module.exports = router;
