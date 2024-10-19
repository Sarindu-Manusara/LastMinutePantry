const mongoose = require('mongoose');

const orderReportSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    StartDate: { type: Date, required: true },
    EndDate: { type: Date, required: true },
  },
  {
    timestamps: true, 
  }
);

const Order = mongoose.model('OrderReport', orderReportSchema);

module.exports = Order;
