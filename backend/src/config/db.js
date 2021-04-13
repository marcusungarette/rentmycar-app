const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB Connected: ${mongoose.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = connectDB;
