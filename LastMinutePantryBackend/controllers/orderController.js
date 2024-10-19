// controllers/orderController.js
const Order = require("../models/orderModel");
const OrderReport = require("../models/orderReportModel");

// controllers/orderController.js
const PDFDocument = require("pdfkit");

exports.generateReport = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const lastReport = await OrderReport.findOne()
      .sort({ createdAt: -1 })
      .limit(1);
    
    let newOrderReport;
    try {
      const name = lastReport ? lastReport.id + 1 : 1;
      
      // create report
      newOrderReport = new OrderReport({
        id: name,
        StartDate: new Date(startDate),
        EndDate: new Date(endDate),
      });
      
      await newOrderReport.save();
    } catch (error) {

    }

    // Fetch orders based on date range
    const orders = await Order.find({
      createdAt: {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      },
    });

    // Create a PDF document
    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=report.pdf");

    // Pipe PDF to response
    doc.pipe(res);

    // Add content to PDF
    doc.fontSize(20).text("Order Report", { align: "center" });
    doc.moveDown();

    // Add report generation date
    doc.fontSize(12).text(`Report Generated: ${new Date().toLocaleString()}`, { align: "left" });
    doc.moveDown();

    // Add date range
    doc.text(`Date Range: ${new Date(startDate).toLocaleDateString()} - ${new Date(endDate).toLocaleDateString()}`);
    doc.moveDown();

    orders.forEach((order) => {
      doc.fontSize(12).text(`Order No: ${order.OrderNo}`);
      doc.text(`Name: ${order.Name}`);
      doc.text(`Total: $${order.total}`);
      doc.text(`Order Type: ${order.OrderType}`);
      doc.text(`Order Date: ${order.createdAt.toLocaleString()}`);
      doc.moveDown();
    });

    // Finalize PDF
    doc.end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.generateInvoice = async (req, res) => {

  try {
    const { orderNo } = req.params;

    // Fetch the order by OrderNo
    const order = await Order.findOne({ OrderNo: orderNo });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Create a PDF document
    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=invoice_${orderNo}.pdf`);

    // Pipe PDF to response
    doc.pipe(res);

    // Add content to PDF
    doc.fontSize(20).text("Invoice", { align: "center" });
    doc.moveDown();

    // Add order and customer information
    doc.fontSize(12).text(`Invoice Number: ${orderNo}`, { align: "left" });
    doc.text(`Order Date: ${new Date(order.createdAt).toLocaleDateString()}`);
    doc.text(`Customer Name: ${order.Name}`);
    doc.text(`Phone: ${order.Phone}`);
    doc.text(`Email: ${order.Email}`);
    doc.text(`Address: ${order.Address}`);
    doc.text(`Order Type: ${order.OrderType}`);
    doc.moveDown();

    // Add item details
    doc.fontSize(14).text("Items:");
    order.cartItems.forEach((item, index) => {
      doc.fontSize(12).text(`${index + 1}. ${item.name} - ${item.quantity} x $${item.price}`);
    });
    doc.moveDown();

    // Add total, subtotal, and discount information
    doc.text(`Subtotal: $${order.subtotal}`);
    doc.text(`Discount: $${order.discount}`);
    doc.text(`Total: $${order.total}`, { align: "right" });

    // Add a footer
    doc.moveDown();
    doc.fontSize(10).text("Thank you for your purchase!", { align: "center" });

    // Finalize PDF and end the stream
    doc.end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllReports = async (req, res) => {
  try {
    const reports = await OrderReport.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new order
exports.createOrder = async (req, res) => {
  let total = 0;
  let discount = 0;

  if(req.body.cartItems.length > 0) {
    req.body.cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
  }

  try {
    const newOrder = new Order({
      Name: req.body.Name,
      Phone: req.body.Phone,
      NIC: req.body.NIC,
      Email: req.body.Email,
      Address: req.body.Address,
      OrderType: req.body.OrderType,
      cartItems: req.body.cartItems,
      couponCode: req.body.couponCode || "",
      subtotal: req.body.total,
      discount: req.body.discount || discount,
      total: total,
      totalItems: req.body.totalItems,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific order by OrderNo
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ OrderNo: req.params.orderNo });
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an order by OrderNo
exports.updateOrder = async (req, res) => {
  let total = 0;


  if(req.body.cartItems.length > 0) {
    req.body.cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
  }

  try {
    const updatedOrder = await Order.findOneAndUpdate(
      { OrderNo: req.params.orderNo },
      {
        $set: {
          Name: req.body.Name,
          Phone: req.body.Phone,
          NIC: req.body.NIC,
          Email: req.body.Email,
          Address: req.body.Address,
          OrderType: req.body.OrderType,
          cartItems: req.body.cartItems,
          couponCode: req.body.couponCode,
          subtotal: req.body.subtotal,
          discount: req.body.discount,
          total: total,
          totalItems: req.body.totalItems,
        },
      },
      { new: true }
    );
    if (!updatedOrder)
      return res.status(404).json({ message: "Order not found" });
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an order by OrderNo
exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findOneAndDelete({
      OrderNo: req.params.orderNo,
    });
    if (!deletedOrder)
      return res.status(404).json({ message: "Order not found" });
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new simple order with minimal attributes
exports.createSimpleOrder = async (req, res) => {
  try {
    // Create a new order object with only the required fields
    const newOrder = new Order({
      OrderNo: req.body.OrderNo, // Order number
      Name: req.body.Name, // Customer name
      Phone: req.body.Phone, // Phone number
      NIC: req.body.NIC, // NIC number
      Email: req.body.Email,
      Address: req.body.Address, // Email address
      OrderType: "Delivery", // Set OrderType to 'Delivery'
    });

    // Save the new order to the database
    const savedOrder = await newOrder.save();

    // Respond with the saved order details
    res.status(201).json(savedOrder);
  } catch (error) {
    // Handle errors and respond with an error message
    res.status(500).json({ message: error.message });
  }
};
