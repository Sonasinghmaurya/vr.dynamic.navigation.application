// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory database (just for demonstration)
let reviews = [];

// GET route to fetch reviews
app.get('/reviews', (req, res) => {
    res.json(reviews);
});

// POST route to add a review
app.post('/reviews', (req, res) => {
    const { name, review } = req.body;
    if (!name || !review) {
        return res.status(400).send('Name and review are required');
    }

    const newReview = { name, review };
    reviews.push(newReview);
    res.status(201).json(newReview);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
