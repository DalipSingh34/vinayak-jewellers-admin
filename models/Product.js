const mongoose = require("mongoose");


const productSchema = new mongoose.Schema(
    {
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },

        subCategory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubCategory",
            required: true
        },


        name: {
            type: String,
            required: true,
            trim: true
        },


        slug: {
            type: String,
            unique: true
        },


        description: {
            type: String
        },


        images: [
            {
                type: String
            }
        ],


        price: {
            type: Number,
            default: 0
        },


        weight: {
            type: String
        },


        material: {
            type: String
        },


        purity: {
            type: String
        },


        stock: {
            type: Number,
            default: 0
        },


        featured: {
            type: Boolean,
            default: false
        },


        status: {
            type: Boolean,
            default: true
        },


        seoTitle: {
            type: String
        },


        seoDescription: {
            type: String
        }

    },
    {
        timestamps: true
    });


module.exports = mongoose.model(
    "Product",
    productSchema
);