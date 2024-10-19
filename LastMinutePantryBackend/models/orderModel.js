const mongoose = require('mongoose');

// Define the Order schema
const orderSchema = new mongoose.Schema(
  {
    OrderNo: { type: String, unique: true }, 
    Name: { type: String, required: true },
    Phone: { type: String, required: true },
    NIC: { type: String, required: true },
    Email: { type: String, required: true },
    Address: { type: String, required: true },
    OrderType: { type: String, enum: ['Delivery', 'Pickup'], required: true },
    cartItems: [
      {
        id: { type: String },
        productName: { type: String },
        description: { type: String },
        price: { type: Number },
        quantity: { type: Number },
      },
    ],
    couponCode: { type: String, default: '' },
    subtotal: { type: Number },
    discount: { type: Number },
    total: { type: Number },
    totalItems: { type: Number },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook to generate OrderNo in format 'LMP-001'
orderSchema.pre('save', async function (next) {
  const order = this;

  // Only generate OrderNo if it doesn't already exist
  if (!order.OrderNo) {
    // Find the last order to increment the order number
    const lastOrder = await mongoose.model('Order').findOne().sort({ createdAt: -1 });

    if (lastOrder) {
      // Extract the number from the last order's OrderNo
      const lastOrderNumber = parseInt(lastOrder.OrderNo.split('-')[1], 10);

      // Increment the number by 1 and format it as 'LMP-001'
      const newOrderNumber = (lastOrderNumber + 1).toString().padStart(3, '0');
      order.OrderNo = `LMP-${newOrderNumber}`;
    } else {
      // If no orders exist, start with 'LMP-001'
      order.OrderNo = 'LMP-001';
    }
  }
  
  next();
});


const Order = mongoose.model('Order', orderSchema);

module.exports = Order;