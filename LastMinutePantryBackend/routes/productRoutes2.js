const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController2');

// Get all products
router.get('/products', productController.getProducts);

// Get product in store
router.get('/products/:storeId', productController.getProductByStore);

// Create a new product
router.post('/products', productController.addProduct);


module.exports = router;
