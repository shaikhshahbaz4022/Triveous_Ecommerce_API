const { CartModel } = require("../models/cart.model")

const addToCart = async (req, res) => {
    try {
        const userID = req.userID
        const { productID } = req.params

        if (!productID) {
            return res.status(400).json({ msg: "Product Id is Not Provided", success: false })
        }

        const cart = await CartModel.findOne({ userID })
        //If cart Does Not Exists Create new One
        if (!cart) {
            const createCart = new CartModel({
                userID,
                products: [{ product: productID, quantity: 1 }]
            })
            await createCart.save()
            return res.status(200).json({ msg: "Product Added to Cart Succesfully", success: true })
        } else {
            // Check the product present in the Cart
            const productIndex = cart.products.findIndex((item) => item.product.toString() == productID)
            if (productIndex !== -1) {
                return res.status(400).json({ msg: "Product Already in the Cart", success: false })
            }
            // if Product is not Present and Cart is Present then Add Product to cart
            cart.products.push({ product: productID, quantity: 1 })
            await cart.save()
            return res.status(200).json({ msg: "Product Added to Cart Succesfully", success: true })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            msg: error.message
        })
    }
}
module.exports = { addToCart }