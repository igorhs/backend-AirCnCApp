const express = require('express');
const multer = require('multer');
const uploadConfig = require ('./config/upload');

const SessionController = require ('./controllers/SessionController');
const SpotController = require ('./controllers/SpotController');
const DashboardController = require ('./controllers/DashboardController');
const BookingController = require ('./controllers/BookingController');

const routes = express.Router();
//Checar a documentação do Multer quando puder
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

//Aqui listamos
routes.get('/spot', SpotController.index);

//Aqui fazemos o upload
routes.post('/spot', upload.single('thumbnail'), SpotController.store);

//Aqui listamos nosso Dashboard
routes.get('/dashboard', DashboardController.show);

routes.post('/spot/:spot_id/bookings', BookingController.store);

module.exports = routes;