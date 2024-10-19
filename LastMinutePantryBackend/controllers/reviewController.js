const Review = require('../models/Review');

// Create a new review
exports.createReview = async (req, res) => {
    try {
        const { name, review, ratings } = req.body;
        const image = req.file ? req.file.path : null; // assuming you're using multer for file upload

        const newReview = new Review({
            name,
            review,
            image,
            ratings
        });

        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all reviews
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a review by ID
exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.status(200).json(review);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a review
exports.updateReview = async (req, res) => {
    try {
        const { name, review, ratings } = req.body;
        const image = req.file ? req.file.path : null;

        const updatedReview = await Review.findByIdAndUpdate(
            req.params.id,
            { name, review, image, ratings },
            { new: true }
        );
        
        if (!updatedReview) return res.status(404).json({ message: 'Review not found' });
        
        res.status(200).json(updatedReview);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a review
exports.deleteReview = async (req, res) => {
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.id);
        if (!deletedReview) return res.status(404).json({ message: 'Review not found' });
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
