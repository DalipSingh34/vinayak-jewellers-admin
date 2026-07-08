const express = require("express");
const authRoutes = require("./routes/authRoutes.js");
const cors = require("cors");
const categoryRoutes = require("./routes/categoryRoutes.js");
const subCategoryRoutes = require("./routes/subCategoryRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/subcategories", subCategoryRoutes);
app.use("/api/products", productRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
    res.json({
        "message": "Vinayak Jewellers API Running"
    })
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

module.exports = app;