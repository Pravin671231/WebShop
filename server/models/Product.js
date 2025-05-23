const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    discription: String,
    price: { type: Number, required: true },
    image: String,
    category: String,
    stock: { type: Number, requird: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
