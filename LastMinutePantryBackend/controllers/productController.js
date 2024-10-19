const Product = require('../models/Products');

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const { vendorId, productName, price, stock, expiryDate } = req.body;

        // Ensure expiryDate is correctly parsed
        const parsedExpiryDate = new Date(expiryDate);
        if (isNaN(parsedExpiryDate.getTime())) {
            return res.status(400).json({ error: 'Invalid expiry date format' });
        }

        const image = req.file ? req.file.path : null;

        const product = new Product({
            vendorId,
            productName,
            price,
            stock,
            expiryDate: parsedExpiryDate,
            image,
        });

        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        console.error('Error saving product:', err.message);
        res.status(500).json({ error: err.message });
    }
};

// Get all products by vendorId
exports.getProductsByVendorId = async (req, res) => {
    try {
        const { vendorId } = req.query; // Assuming vendorId is passed as a query param
        if (!vendorId) {
            return res.status(400).json({ error: 'Vendor ID is required' });
        }

        const products = await Product.find({ vendorId });
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a product
exports.updateProduct = async (req, res) => {
    try {
        const { vendorId, productName, price, stock, expiryDate } = req.body;
        const image = req.file ? req.file.path : null;

        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { vendorId, productName, price, stock, expiryDate, image },
            { new: true }
        );

        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });

        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
