const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
    name: {
        type: String, required: true
    },

    email: {
        type: String, required: true, unique: true, trim: true
    },

    password: {
        type: String, required: true, trim: true
    },

    role: {
        type: String,
        enum: ["admin", "manager"],
        default: "admin"
    }

}, { timestamps: true });

const AdminModel = mongoose.model("AdminModel", AdminSchema);

module.exports = AdminModel;