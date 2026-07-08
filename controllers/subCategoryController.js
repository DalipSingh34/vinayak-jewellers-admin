const SubCategory = require("../models/subCategory.js");
const Category = require("../models/Category.js");
const slugify = require("slugify");


// Create SubCategory
const createSubCategory = async (req, res) => {
    try {

        const { category, name, description, status } = req.body;


        if (!category || !name) {
            return res.status(400).json({
                success: false,
                message: "Category and name are required"
            });
        }


        const categoryExists = await Category.findById(category);

        if (!categoryExists) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }


        const existing = await SubCategory.findOne({ name });

        if (existing) {
            return res.status(400).json({
                success: false,
                message: "SubCategory already exists"
            });
        }


        const subCategory = await SubCategory.create({
            category,
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
            message: "SubCategory created successfully",
            subCategory
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};



// Get All SubCategories
const getSubCategories = async (req, res) => {

    try {

        const subCategories = await SubCategory.find()
            .populate("category", "name")
            .sort({ createdAt: -1 });


        res.status(200).json({
            success: true,
            count: subCategories.length,
            subCategories
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



// Get Single SubCategory
const getSubCategoryById = async (req, res) => {

    try {

        const subCategory = await SubCategory.findById(req.params.id)
            .populate("category", "name");


        if (!subCategory) {

            return res.status(404).json({
                success: false,
                message: "SubCategory not found"
            });

        }


        res.status(200).json({
            success: true,
            subCategory
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



// Update SubCategory
const updateSubCategory = async (req, res) => {

    try {

        const subCategory = await SubCategory.findById(req.params.id);


        if (!subCategory) {

            return res.status(404).json({
                success: false,
                message: "SubCategory not found"
            });

        }


        const {
            category,
            name,
            description,
            status
        } = req.body;



        if (category) {

            const categoryExists = await Category.findById(category);

            if (!categoryExists) {
                return res.status(404).json({
                    success: false,
                    message: "Category not found"
                });
            }

            subCategory.category = category;
        }


        if (name) {

            subCategory.name = name;

            subCategory.slug = slugify(name, {
                lower: true,
                strict: true
            });

        }


        if (description !== undefined) {
            subCategory.description = description;
        }


        if (status !== undefined) {
            subCategory.status = status;
        }


        if (req.file) {
            subCategory.image = req.file.path;
        }



        await subCategory.save();


        res.status(200).json({
            success: true,
            message: "SubCategory updated successfully",
            subCategory
        });



    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



// Delete SubCategory
const deleteSubCategory = async (req, res) => {

    try {

        const subCategory = await SubCategory.findById(req.params.id);


        if (!subCategory) {

            return res.status(404).json({
                success: false,
                message: "SubCategory not found"
            });

        }


        await subCategory.deleteOne();


        res.status(200).json({
            success: true,
            message: "SubCategory deleted successfully"
        });



    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



module.exports = {
    createSubCategory,
    getSubCategories,
    getSubCategoryById,
    updateSubCategory,
    deleteSubCategory
};