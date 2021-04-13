const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  thumbnail: String,
  model: String,
  category: String,
  brand: String,
  price: Number,
  options: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Car', CarSchema);
