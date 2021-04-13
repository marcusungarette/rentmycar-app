const Car = require('../models/Car');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const { option } = req.query;

    const cars = await Car.find({ options: option });

    return res.json(cars);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { model, category, brand, price, options } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User does not exists!' });
    }

    const car = await Car.create({
      user: user_id,
      thumbnail: filename,
      model,
      category,
      brand,
      price,
      options: options.split(',').map(option => option.trim()),
    });

    return res.json(car);
  },
};
