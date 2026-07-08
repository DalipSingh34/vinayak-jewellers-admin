const Product = require("../models/Product.js");
const Category = require("../models/Category.js");
const SubCategory = require("../models/SubCategory.js");
const slugify = require("slugify");


// Create Product
const createProduct = async (req, res) => {
    try {

        const {
            category,
            subCategory,
            name,
            description,
            price,
            weight,
            material,
            purity,
            stock,
            featured,
            status,
            seoTitle,
            seoDescription
        } = req.body;


        if (!category || !subCategory || !name) {
            return res.status(400).json({
                success: false,
                message: "Category, SubCategory and Name are required"
            });
        }


        const categoryExists = await Category.findById(category);

        if (!categoryExists) {
            return res.status(404).json({
                success: false,
                message: "Category not found"
            });
        }


        const subCategoryExists = await SubCategory.findById(subCategory);

        if (!subCategoryExists) {
            return res.status(404).json({
                success: false,
                message: "SubCategory not found"
            });
        }


        const existingProduct = await Product.findOne({ name });

        if (existingProduct) {
            return res.status(400).json({
                success: false,
                message: "Product already exists"
            });
        }


        const images = req.files
            ? req.files.map(file => file.path)
            : [];


        const product = await Product.create({

            category,
            subCategory,

            name,

            slug: slugify(name, {
                lower: true,
                strict: true
            }),

            description,

            images,

            price,
            weight,
            material,
            purity,
            stock,

            featured,
            status,

            seoTitle,
            seoDescription
        });



        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product
        });



    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};



// Get All Products
const getProducts = async (req, res) => {

    try {

        const products = await Product.find()
            .populate("category", "name")
            .populate("subCategory", "name")
            .sort({ createdAt: -1 });


        res.status(200).json({
            success: true,
            count: products.length,
            products
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



// Get Single Product
const getProductById = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id)
            .populate("category", "name")
            .populate("subCategory", "name");


        if (!product) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            });

        }


        res.status(200).json({
            success: true,
            product
        });



    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



// Update Product
const updateProduct = async (req, res) => {

    try {


        const product = await Product.findById(req.params.id);


        if (!product) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            });

        }


        const data = req.body;


        if (data.name) {

            product.name = data.name;

            product.slug = slugify(data.name, {
                lower: true,
                strict: true
            });

        }


        Object.keys(data).forEach(key => {

            if (key !== "name") {
                product[key] = data[key];
            }

        });


        if (req.files && req.files.length > 0) {

            product.images = req.files.map(
                file => file.path
            );

        }


        await product.save();



        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product
        });



    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



// Delete Product
const deleteProduct = async (req, res) => {

    try {

        const product = await Product.findById(req.params.id);


        if (!product) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            });

        }


        await product.deleteOne();


        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });



    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getProductBySlug = async (req, res) => {

    try {

        const product = await Product.findOne({
            slug: req.params.slug
        })
            .populate("category", "name")
            .populate("subCategory", "name");


        if (!product) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            });

        }


        res.status(200).json({
            success: true,
            product
        });


    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductBySlug
};