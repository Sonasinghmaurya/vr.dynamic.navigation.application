// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/restaurant-reviews', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
});

// Define a Review schema
const reviewSchema = new mongoose.Schema({
    name: String,
    review: String,
    date: { type: Date, default: Date.now }
});

// Create a Review model
const Review = mongoose.model('Review', reviewSchema);

// POST route to submit a review
app.post('/reviews', async (req, res) => {
    const { name, review } = req.body;

    try {
        const newReview = new Review({ name, review });
        await newReview.save();
        res.status(201).json({ message: 'Review submitted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting review', error });
    }
});

// GET route to fetch all reviews
app.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
