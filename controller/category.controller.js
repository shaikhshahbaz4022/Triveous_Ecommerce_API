const { categoryModel } = require("../models/category.model")

const addCategory = async (req, res) => {
    try {
        const { name } = req.body
        const newCategory = new categoryModel({ name })
        await newCategory.save()
        return res.status(201).json({ msg: "Category Added Succesfully", data: newCategory, success: true })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            msg: error.message
        })
    }
}
const getAllCategory = async (req, res) => {
    try {
        const data = await categoryModel.find()
        if (!data || data.length == 0) {
            return res.status(404).json({ msg: 'Category Not Found', success: false })
        }
        return res.status(200).json({ data, success: true })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            msg: error.message
        })
    }
}
const getCategoryByID = async (req, res) => {
    try {
        const { categoryID } = req.params
        const data = await categoryModel.findById(categoryID)
        if (!data) {
            return res.status(404).json({ msg: "Category Not Found", success: false })
        }
        return res.status(200).json({ data, success: true })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
            msg: error.message
        })
    }
}
module.exports = { addCategory, getAllCategory, getCategoryByID }