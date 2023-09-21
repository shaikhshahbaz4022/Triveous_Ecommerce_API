const express = require('express');
const { addproduct, getAllProducts, getProductDetails } = require('../controller/product.controller');
const productRouter = express.Router()

productRouter.post('/create', addproduct)
productRouter.get('/get', getAllProducts)
productRouter.get('/get/:productID', getProductDetails)

module.exports = { productRouter }