const express = require('express');
const cors = require('cors');
const { Connection } = require('./config/db');
const { userRouter } = require('./routes/user.routes');
const { productRouter } = require('./routes/product.routes');
const { categoryRouter } = require('./routes/category.routes');
const { authenticate } = require('./middleware/auth.middleware');
const { cartRouter } = require('./routes/cart.routes');
const { orderRouter } = require('./routes/order.routes');
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()
const PORT = process.env.PORT || 3001


app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/category', categoryRouter)
app.use(authenticate)
app.use('/cart', cartRouter)
app.use('/order', orderRouter)


app.listen(PORT, async () => {
    try {
        await Connection
        console.log("Database Connected Sucessfully");

    } catch (error) {
        console.log("Database Connection Error", error.message);
    }
    console.log(`Server Connected to Port: ${PORT}`);
})

