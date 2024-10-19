const mongoose = require('mongoose');

// Define the PaymentMethod schema
const paymentMethodSchema = new mongoose.Schema({
  nameOnCard: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 100
  },
  cardNumber: {
    type: String,
    required: true,
    match: /^[0-9]{16}$/,  // Ensure it's exactly 16 digits
    unique: true
  },
  expiryDate: {
    type: String,
    required: true
  },
  cvc: {
    type: String,
    required: true,
    match: /^[0-9]{3,4}$/ // Ensure it's 3 or 4 digits for CVC
  },
}, {
  timestamps: true
});

// Create and export the PaymentMethod model
module.exports = mongoose.model('PaymentMethod', paymentMethodSchema);
