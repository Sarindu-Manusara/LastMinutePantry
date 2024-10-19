const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    image: {
        type: String, // Store image URL or file path
        required: false
    },
    ratings: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
