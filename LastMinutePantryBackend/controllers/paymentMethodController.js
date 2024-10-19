const PaymentMethod = require('../models/PaymentMethod');

// Create a new payment method
exports.createPaymentMethod = async (req, res) => {
  try {
    const { nameOnCard, cardNumber, expiryDate, cvc } = req.body;

    // Create a new payment method instance
    const newPaymentMethod = new PaymentMethod({
      nameOnCard,
      cardNumber,
      expiryDate,
      cvc
    });

    // Save the payment method to the database
    const savedPaymentMethod = await newPaymentMethod.save();
    res.status(201).json(savedPaymentMethod);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all payment methods
exports.getAllPaymentMethods = async (req, res) => {
  try {
    const paymentMethods = await PaymentMethod.find();
    res.status(200).json(paymentMethods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific payment method by ID
exports.getPaymentMethodById = async (req, res) => {
  try {
    const paymentMethod = await PaymentMethod.findById(req.params.id);
    if (!paymentMethod) {
      return res.status(404).json({ message: 'Payment Method not found' });
    }
    res.status(200).json(paymentMethod);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a payment method
exports.updatePaymentMethod = async (req, res) => {
  try {
    const { nameOnCard, cardNumber, expiryDate, cvc } = req.body;

    const updatedPaymentMethod = await PaymentMethod.findByIdAndUpdate(
      req.params.id,
      { nameOnCard, cardNumber, expiryDate, cvc },
      { new: true, runValidators: true }
    );

    if (!updatedPaymentMethod) {
      return res.status(404).json({ message: 'Payment Method not found' });
    }

    res.status(200).json(updatedPaymentMethod);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a payment method
exports.deletePaymentMethod = async (req, res) => {
  try {
    const deletedPaymentMethod = await PaymentMethod.findByIdAndDelete(req.params.id);

    if (!deletedPaymentMethod) {
      return res.status(404).json({ message: 'Payment Method not found' });
    }

    res.status(200).json({ message: 'Payment Method deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
