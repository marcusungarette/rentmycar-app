const express = require('express');
const path = require('path');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const CarController = require('./controllers/CarController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/cars', upload.single('thumbnail'), CarController.store);
routes.get('/cars', CarController.index);
routes.get('/dashboard', DashboardController.show);
routes.post('/cars/:car_id/bookings', BookingController.store);

module.exports = routes;
