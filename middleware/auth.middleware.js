const jwt = require('jsonwebtoken')
require('dotenv').config()
const Private_Key = process.env.Private_Key
const Auth = (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")[1]
        if (!token) {
            return res.status(401).json({ msg: "Please Provide Token" })
        }
        jwt.verify(token, Private_Key, async (err, decoded) => {
            if (err) return res.status(401).json({ msg: "Token is Invalid or Expired" })
            if (decoded) {
                req.userID = decoded.userID
                next()
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            msg: error.message
        })
    }
}