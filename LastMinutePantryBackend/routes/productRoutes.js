const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');

// Define multer for file upload
const upload = multer({ dest: 'uploads/' });

// Product routes
router.post('/create', upload.single('image'), productController.createProduct);
router.get('/', productController.getProductsByVendorId); // Using query params to get products by vendorId
router.get('/:id', productController.getProductById);
router.put('/:id', upload.single('image'), productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
