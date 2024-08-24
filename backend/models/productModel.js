const mongoose = require("mongoose");

// Define the product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  oldPrice: { type: Number, require: true},
  ranking: {type: Number, require:true}
});

// Create the product model
const ProductModel = mongoose.models.Product || mongoose.model("Product", productSchema);

// Export the product model
module.exports = ProductModel;
