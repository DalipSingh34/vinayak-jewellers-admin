const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema(
    {
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },

        name: {
            type: String,
            required: true,
            trim: true
        },

        slug: {
            type: String,
            required: true,
            unique: true
        },

        description: {
            type: String
        },

        image: {
            type: String,
            default: ""
        },

        status: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model(
    "SubCategory",
    subCategorySchema
);