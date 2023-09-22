const express = require('express');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
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

/* ----->>>>>> Swagger <<<<<<------*/
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Triveous Ecommerce Backend",
            version: "1.0.0",
            description:
                "I've built a user-friendly E-commerce API featuring essential actions like registration, login, product viewing, cart management, secure order placement, and order history tracking. Our system ensures data security with authentication and maintains stability with a rate limiter. Leveraging Node.js, MongoDB, Express, and JavaScript, we meet industry standards for a seamless shopping experience.",
        },
        servers: [
            {
                url: "http://localhost:8080/",
            },
        ],
    },
    apis: ["./docs/*.js"],
};
const specs = swaggerJsDoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

/* ----->>>>>> Home Route <<<<<<------*/

app.get('/', (req, res) => {
    res.status(200).json({ msg: "Welcome to Traveous E-commerce Backend API" })
})

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

