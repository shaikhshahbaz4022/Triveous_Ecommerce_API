
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Private_Key = process.env.Private_Key
const { UserModel } = require('../models/user.model');
const { model } = require('mongoose');
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body
        // if user already register
        const isUserPresent = await UserModel.findOne({ email })
        if (isUserPresent) {
            return res.status(409).json({ msg: "User Already Present" })
        }
        // hashing Password 
        const hashedPassword = await bcrypt.hash(password, 10);

        if (!hashedPassword) {
            return res.status(500).json({
                status: 500,
                success: false,
                message: "Error in hashing password",
            });
        }
        //creating new User
        const registerUser = new UserModel({
            username,
            email,
            password: hashedPassword
        })
        await registerUser.save()

        return res.status(201).json({ msg: "Registration Succesfully", success: true })
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const isUserPresent = await UserModel.findOne({ email })
        if (!isUserPresent) {
            return res.status(404).json({ msg: "User Not Found" })
        }

        bcrypt.compare(password, isUserPresent.password, async function (err, result) {
            if (err || !result) return res.status(401).json({ msg: "Authentication failed" })

            const token = jwt.sign(
                {
                    userID: isUserPresent._id,
                    email: isUserPresent.email
                },
                Private_Key,
                { expiresIn: '2hr' }
            )
            return res.status(200).json({
                msg: "Login Succesfully",
                User: isUserPresent,
                success: true,
                token
            })

        });

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}
module.exports = { registerUser, loginUser }