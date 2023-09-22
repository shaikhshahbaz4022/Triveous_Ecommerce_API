const { CartModel } = require("../models/cart.model")
const { OrderModel } = require("../models/order.model")

const placeOrder = async (req, res) => {
    try {
        const userID = req.userID

        const cart = await CartModel.findOne({ userID }).populate('products.product')
        // Checking the cart is Empty or Not
        if (!cart || cart.products.length == 0) {
            return res.status(400).json({ msg: "Cannot Place Order,cart is Empty", success: false })
        }

        // calculating the total Order Price
        const totalPrice = cart.products.reduce((Total, curr) => {
            return Total + curr.quantity * curr.product.price
        }, 0)

        // Creating New Order
        const newOrder = new OrderModel({
            user: userID,
            items: cart.products.map((ele) => {
                return {
                    product: ele.product._id,
                    quantity: ele.quantity
                }
            }),
            total: totalPrice.toFixed(2),
            orderStatus: {
                status: "Order Placed",
                description: "Order Placed Succesfully"
            }

        })
        await newOrder.save()

        // making cart empty after order Placed
        cart.products = []
        await cart.save()

        return res.status(200).json({ msg: "Order Placed Succesfully", success: true, data: newOrder })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            msg: error.message
        })
    }
}
module.exports = { placeOrder }