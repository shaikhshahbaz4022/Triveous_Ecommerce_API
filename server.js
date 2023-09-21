const express = require('express');
const cors = require('cors');
const { Connection } = require('./config/db');
const { userRouter } = require('./routes/user.routes');
const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()
const PORT = process.env.PORT || 3001


app.use('/user', userRouter)



app.listen(PORT, async () => {
    try {
        await Connection
        console.log("Database Connected Sucessfully");

    } catch (error) {
        console.log("Database Connection Error", error.message);
    }
    console.log(`Server Connected to Port: ${PORT}`);
})

