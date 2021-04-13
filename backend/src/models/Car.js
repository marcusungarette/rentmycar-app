const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema(
  {
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
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Virtuals generate thumbnail url
CarSchema.virtual('thumbnail_url').get(function () {
  return `http://localhost:3333/files/${this.thumbnail}`;
});

module.exports = mongoose.model('Car', CarSchema);
