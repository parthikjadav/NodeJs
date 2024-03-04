const express = require('express');
const { orderController } = require('../controller');
const route = express.Router();

route.post('/add',orderController.addOrder)

module.exports = route;