const express = require('express');
const router = express.Router();
const paymentMethodController = require('../controllers/paymentMethodController');

// Create a new payment method
router.post('/payment-methods', paymentMethodController.createPaymentMethod);

// Get all payment methods
router.get('/payment-methods', paymentMethodController.getAllPaymentMethods);

// Get a specific payment method by ID
router.get('/payment-methods/:id', paymentMethodController.getPaymentMethodById);

// Update a payment method
router.put('/payment-methods/:id', paymentMethodController.updatePaymentMethod);

// Delete a payment method
router.delete('/payment-methods/:id', paymentMethodController.deletePaymentMethod);

module.exports = router;
