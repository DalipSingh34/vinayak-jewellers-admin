const Category = require("../models/Category.js");
const slugify = require("slugify");

// Create Category
const createCategory = async (req, res) => {
    try {
        const { name, description, status } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: "Category name is required"
            });
        }

        const existingCategory = await Category.findOne({ name });

        if (existingCategory) {
            return res.status(400).json({
                success: false,
                message: "Category already exists"
            });
        }

        const category = await Category.create({
            name,
            slug: slugify(name, {
                lower: true,
                strict: true
            }),
            description,
            image: req.file ? req.file.path : "",
            status
        });

        res.status(201).json({
            success: true,
            message: "Category created successfully",
            category
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Get All Categories
const getCategories = async (req, res) => {
    try {

        const categories = await Category.find()
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: categories.length,
            categories
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Get Single Category
const getCategoryById = async (req, res) => {
    try {

        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }

        res.status(200).json({
            success: true,
            category
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Update Category
const updateCategory = async (req, res) => {
    try {

        const { name, description, status } = req.body;

        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }


        if (name) {
            category.name = name;
            category.slug = slugify(name, {
                lower: true,
                strict: true
            });
        }

        if (description !== undefined) {
            category.description = description;
        }

        if (status !== undefined) {
            category.status = status;
        }

        if (req.file) {
            category.image = req.file.path;
        }


        await category.save();


        res.status(200).json({
            success: true,
            message: "Category updated successfully",
            category
        });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Delete Category
const deleteCategory = async (req, res) => {
    try {

        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }

        await category.deleteOne();


        res.status(200).json({
            success: true,
            message: "Category deleted successfully"
        });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


module.exports = {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
};