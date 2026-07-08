const express = require("express");

const {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
} = require("../controllers/categoryController.js");

const protect = require("../middleware/authMiddleware.js");

const authorizeRoles = require("../middleware/roleMiddleware.js");

const upload = require("../middleware/uploadMiddleware.js");

const router = express.Router();


// Create
router.post(
    "/",
    protect,
    authorizeRoles("admin"),
    upload.single("image"),
    createCategory
);


// Read
router.get(
    "/",
    getCategories
);


router.get(
    "/:id",
    getCategoryById
);


// Update
router.put(
    "/:id",
    protect,
    authorizeRoles("admin"),
    upload.single("image"),
    updateCategory
);


// Delete
router.delete(
    "/:id",
    protect,
    authorizeRoles("admin"),
    deleteCategory
);


module.exports = router;