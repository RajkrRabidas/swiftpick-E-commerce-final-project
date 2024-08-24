const productModel = require("../models/productModel");
const fs = require('fs');

// Add product item
const addProduct = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const product = new productModel({
        name: req.body.name,
        image: image_filename,
        price: req.body.price,
        category: req.body.category,
        oldPrice: req.body.oldPrice,
        ranking: req.body.ranking
    });

    try {
        await product.save();
        res.json({ success: true, message: "Product Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// List all products
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, data: products });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Remove a product
const removeProduct = async (req, res) => {
    try {
        const productId = req.query.id; // Get the id from the query parameters

        // Find the product by ID
        const product = await productModel.findById(productId);

        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        // Remove the associated image file
        fs.unlink(`uploads/${product.image}`, (err) => {
            if (err) console.log("Failed to delete image file:", err);
        });

        // Delete the product from the database
        await productModel.findByIdAndDelete(productId);
        res.json({ success: true, message: "Product Removed" });
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};


module.exports = {
    addProduct,
    listProduct,
    removeProduct
};
