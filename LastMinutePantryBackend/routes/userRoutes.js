const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middleware/multer'); // Import multer middleware

// User routes
router.post('/users', upload.single('image'), userController.createUser); // Add image upload to create user
router.put('/users/:id', upload.single('image'), userController.updateUser); // Add image upload to update user
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.delete('/users/:id', userController.deleteUser);
router.post('/users/login', userController.customerLogin);

module.exports = router;
