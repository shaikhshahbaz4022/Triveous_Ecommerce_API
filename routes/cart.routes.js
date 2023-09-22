const express = require('express');
const { addToCart } = require('../controller/cart.controller');
const cartRouter = express.Router()

cartRouter.post('/addtocart/:productID', addToCart)

module.exports = { cartRouter }