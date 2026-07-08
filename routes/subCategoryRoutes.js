const express = require("express");

const {
    createSubCategory,
    getSubCategories,
    getSubCategoryById,
    updateSubCategory,
    deleteSubCategory
} = require("../controllers/subCategoryController.js");


const protect = require("../middleware/authMiddleware.js");
const upload = require("../middleware/uploadMiddleware.js");

const authorizeRoles = require("../middleware/roleMiddleware");

const router = express.Router();



router.post(
    "/",
    protect,
    authorizeRoles("admin"),
    upload.single("image"),
    createSubCategory
);


router.get(
    "/",
    getSubCategories
);


router.get(
    "/:id",
    getSubCategoryById
);



router.put(
    "/:id",
    protect,
    authorizeRoles("admin"),
    upload.single("image"),
    updateSubCategory
);



router.delete(
    "/:id",
    protect,
    authorizeRoles("admin"),
    deleteSubCategory
);



module.exports = router;