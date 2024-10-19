const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Create a new order
router.post("/orders", orderController.createOrder);

// Get all orders
router.get("/orders", orderController.getOrders);

// Get all reports
router.get("/orders/report/all", orderController.getAllReports);

router.get("/orders/report/:orderNo", orderController.generateInvoice);

// Generate a specific report
router.get("/orders/report", orderController.generateReport);

// Get a specific order by OrderNo
router.get("/orders/:orderNo", orderController.getOrderById);

// Update an order by OrderNo
router.put("/orders/:orderNo", orderController.updateOrder);

// Delete an order by OrderNo
router.delete("/orders/:orderNo", orderController.deleteOrder);

module.exports = router;
