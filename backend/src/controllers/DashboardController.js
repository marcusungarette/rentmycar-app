const Car = require('../models/Car');
module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const cars = await Car.find({ user: user_id });

    return res.json(cars);
  },
};
