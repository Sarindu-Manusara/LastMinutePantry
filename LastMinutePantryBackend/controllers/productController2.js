// controllers/orderController.js
const Product = require("../models/productModel2");


// getProducts
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// getProductByStore
exports.getProductByStore = async (req, res) => {
  try {
    const products = await Product.find({ storeId: req.params.storeId });
    res.status(200).json(products);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}

// addProduct
exports.addProduct = async (req, res) => {
  try {
    const product = new Product({
      storeId: req.body.storeId,
      productName: req.body.productName,
      description: req.body.description,
      expiryDate: req.body.expiryDate,
      price: req.body.price,
      oldPrice: req.body.oldPrice,
      image: req.body.image
    });
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}