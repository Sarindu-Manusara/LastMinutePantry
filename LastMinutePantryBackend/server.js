const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Import routes
const vendorRoutes = require('./routes/vendorRoutes');
const productRoutes = require('./routes/productRoutes');
const deliveryRoutes = require('./routes/deliveryRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const authRoutes = require('./routes/authRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes2 = require('./routes/productRoutes2');
const couponRoutes = require('./routes/couponRoutes');
const paymentMethodRoutes = require('./routes/paymentMethodRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json()); // Use Express' built-in body-parser
app.use(cors()); // Enable CORS

// Routes
app.use('/users', userRoutes);
app.use('/vendors', vendorRoutes);
app.use('/products', productRoutes);
app.use('/deliveries', deliveryRoutes);
app.use('/payments', paymentRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/auth', authRoutes);
app.use('/notifications', notificationRoutes);
app.use('/reviews', reviewRoutes);
app.use('/paymenthMethods', paymentMethodRoutes)
app.use('/api', orderRoutes);
app.use('/api', productRoutes2);
app.use('/api', couponRoutes);

// MongoDB Connection
mongoose.connect(MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection failed:', err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});
