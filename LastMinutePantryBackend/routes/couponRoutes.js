const express = require('express');
const router = express.Router();
const couponController = require('../controllers/couponController');

// Get all coupons
router.get('/coupons', couponController.checkcoupon);


module.exports = router;
