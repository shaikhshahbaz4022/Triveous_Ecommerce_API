const mongoose = require('mongoose');
require('dotenv').config()
const Connection = mongoose.connect(process.env.Mongo_URL)
module.exports = { Connection }