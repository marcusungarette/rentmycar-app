const Booking = require('../models/Booking');

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { car_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      car: car_id,
      date,
    });

    await booking.populate('car').populate('user').execPopulate();

    return res.json(booking);
  },
};
