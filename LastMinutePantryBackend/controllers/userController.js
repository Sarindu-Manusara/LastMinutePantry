const User = require('../models/User');
const jwt = require('jsonwebtoken');


// Login a user
exports.customerLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email.toLowerCase() });
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        if (user.role !== 'customer') {
            return res.status(403).json({ message: "Access denied" });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Include the user's ID in the response
        return res.status(200).json({
            message: "Login successful",
            token,
            user: { id: user._id, role: user.role } // Add the user ID here
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};


// Create a new user
// Create a new user
const upload = require('../middleware/multer'); // Import multer

// Create a new user with an image
exports.createUser = async (req, res) => {
  try {
    const { name, email, address, password, phone } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const user = new User({
      name,
      email: email.toLowerCase(),
      address,
      password,
      phone,
      image
    });

    await user.save();
    return res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(400).json({ message: error.message });
  }
};



// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error); // Log the error if it occurs
        return res.status(500).json({ message: "Failed to fetch users" });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            console.log('User not found');
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Error fetching user by ID:', error); // Log the error if it occurs
        return res.status(500).json({ message: "Failed to fetch user" });
    }
};


// Update a user
// Update a user with an image
exports.updateUser = async (req, res) => {
    try {
      const { name, email, address, phone } = req.body;
      const image = req.file ? `/uploads/${req.file.filename}` : null;
  
      const updatedData = {
        name,
        email: email.toLowerCase(),
        address,
        phone,
        ...(image && { image }) // Only update image if one is provided
      };
  
      const user = await User.findByIdAndUpdate(req.params.id, updatedData, { new: true });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(user);
    } catch (error) {
      console.error('Error updating user:', error);
      return res.status(500).json({ message: 'Failed to update user' });
    }
  };
  


// Delete a user
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            console.log('User not found');
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error); // Log the error if it occurs
        return res.status(500).json({ message: "Failed to delete user" });
    }
};
