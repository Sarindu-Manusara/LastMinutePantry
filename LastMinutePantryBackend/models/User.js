// Updated userSchema in the model
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: false }, // Already present
  gender: { 
    type: String, 
    enum: ['male', 'female', 'other'], 
    required: false 
  }, // New gender field
  date: { type: Date, required: false }, // New date field for date picker
  role: {
    type: String,
    enum: ['customer', 'vendor', 'admin', 'driver'],
    default: 'customer',
  },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Hash the password before saving the user
userSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare the entered password with the hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
