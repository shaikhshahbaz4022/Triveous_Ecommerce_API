const express = require('express');
const { placeOrder } = require('../controller/order.controller');
const orderRouter = express.Router()

orderRouter.post("/placeorder", placeOrder)

module.exports = { orderRouter }