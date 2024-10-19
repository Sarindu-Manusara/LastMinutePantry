const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const multer = require('multer'); // for handling image uploads

// Configure multer for image upload
const upload = multer({ dest: 'uploads/' });

router.post('/create', upload.single('image'), reviewController.createReview);
router.get('/', reviewController.getAllReviews);
router.get('/:id', reviewController.getReviewById);
router.put('/:id', upload.single('image'), reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);

module.exports = router;
