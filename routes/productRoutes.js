const express = require("express");


const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductBySlug
} = require("../controllers/productController.js");


const protect = require("../middleware/authMiddleware.js");

const authorizeRoles = require("../middleware/roleMiddleware");

const upload = require("../middleware/uploadMiddleware.js");


const router = express.Router();



// Create Product
router.post(
    "/",
    protect,
    authorizeRoles("admin"),
    upload.array("images", 5),
    createProduct
);



// Get All
router.get(
    "/",
    getProducts
);

// get by slug
router.get(
    "/slug/:slug",
    getProductBySlug
);



// Get Single
router.get(
    "/:id",
    getProductById
);



// Update
router.put(
    "/:id",
    protect,
    authorizeRoles("admin"),
    upload.array("images", 5),
    updateProduct
);



// Delete
router.delete(
    "/:id",
    protect,
    authorizeRoles("admin"),
    deleteProduct
);



module.exports = router;