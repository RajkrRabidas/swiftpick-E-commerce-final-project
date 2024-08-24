const express = require("express");
const { addProduct, listProduct, removeProduct } = require("../controllers/productController");
const multer = require("multer");

const productRoute = express.Router();

// Image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Define routes
productRoute.post("/add", upload.single("image"), addProduct);
productRoute.get("/list", listProduct);
productRoute.delete("/remove", removeProduct);

module.exports = productRoute;
