const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const routes = require('./routes');

//DATABASE
dotenv.config();
connectDB();

const server = express();

server.use(cors());
server.use(express.json());

server.use(routes);

const PORT = process.env.PORT || 3333;

const app = server.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log('Error: HTTP 401 bad auth Authentication failed'.red);
  //Close server & exist process
  app.close(() => process.exit(1));
});
