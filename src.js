const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/restaurant-reviews?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.log(err));
