const express = require('express');
const { addCategory, getAllCategory, getCategoryByID } = require('../controller/category.controller');
const categoryRouter = express.Router()

// create New Category
categoryRouter.post('/create', addCategory)

// Get All Category
categoryRouter.get('/get', getAllCategory)

// Get Category by ID (categoryID)
categoryRouter.get('/get/:categoryID/particular', getCategoryByID)

module.exports = { categoryRouter }