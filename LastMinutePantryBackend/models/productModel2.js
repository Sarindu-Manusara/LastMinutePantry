const mongoose = require('mongoose');

// Create a schema for the product
const product2Schema = new mongoose.Schema({
  storeId: {
    type: Number,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  oldPrice: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

// Export the model
const Product2 = mongoose.model('Product2', product2Schema);

module.exports = Product2;
