const Vendor = require('../models/Vendor');
const bcrypt = require('bcryptjs'); // For password hashing
const jwt = require('jsonwebtoken'); // For generating JWT token

// Ensure JWT_SECRET is defined
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Create a new vendor
exports.createVendor = async (req, res) => {
  try {
    // Hash the vendor password before saving
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const vendor = new Vendor({
      ...req.body,
      password: hashedPassword, // Save hashed password
    });
    await vendor.save();
    res.status(201).json(vendor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Vendor login logic
exports.loginVendor = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the vendor by email
    const vendor = await Vendor.findOne({ email });

    // Check if vendor exists
    if (!vendor) {
      return res.status(401).json({ message: 'Invalid email or vendor does not exist' });
    }

    // Compare the entered password with the hashed password
    const isMatch = await bcrypt.compare(password, vendor.password);
    if (!isMatch) {
      console.log('Password mismatch'); // Debugging log
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Ensure JWT_SECRET is defined
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not defined');
      return res.status(500).json({ message: 'Server configuration error' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: vendor._id, email: vendor.email, name: vendor.name },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Return success response with token and vendor details
    res.status(200).json({
      token,   // JWT token
      vendor: {
        id: vendor._id,   // Vendor ID
        name: vendor.name, // Vendor Name
        email: vendor.email, // Vendor Email
      },
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: error.message });
  }
};



// Get all vendors
exports.getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.status(200).json(vendors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single vendor by ID
exports.getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.status(200).json(vendor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a vendor by ID
exports.updateVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.status(200).json(vendor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a vendor by ID
exports.deleteVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.id);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }
    res.status(200).json({ message: 'Vendor deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
