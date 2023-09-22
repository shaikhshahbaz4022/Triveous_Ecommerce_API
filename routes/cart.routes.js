const express = require('express');
const { addToCart, getAllCartItems, incrementQuantity, decrementQuantity } = require('../controller/cart.controller');
const cartRouter = express.Router()

//add Product to cart
cartRouter.post('/addtocart/:productID', addToCart)

//see particular User Cart Items 
cartRouter.get('/get', getAllCartItems)

//Increment Quantity of cart Product
cartRouter.patch('/increment/:productID', incrementQuantity)

//Decrement Quantity of Cart Product
cartRouter.patch('/decrement/:productID', decrementQuantity)

module.exports = { cartRouter }