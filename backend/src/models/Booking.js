const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
  },
});

module.exports = mongoose.model('Booking', BookingSchema);
