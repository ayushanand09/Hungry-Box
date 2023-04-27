const express = require("express");
const { getAllProducts,createProduct, updateProduct, deleteProduct, getProductDetails, getProductDetailsName } = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles, authorizeCreateRole } = require("../middleware/auth");
const router = express.Router();

//Get all products
router.route("/products").get(isAuthenticatedUser, getAllProducts);

// Create a new product --> ADMIN
router.route("/admin/product/new").post(isAuthenticatedUser,  createProduct);

// Update a product
router.route("/admin/product/:id").put(isAuthenticatedUser, updateProduct);

// Delete a product --> ADMIN
router.route("/admin/product/:id").delete(isAuthenticatedUser, deleteProduct);

//Find a particular product
// router.route("/product/:id").get(isAuthenticatedUser, getProductDetails);

router.route("/product/:name").get(isAuthenticatedUser, getProductDetailsName);

module.exports = router;
// router.post("/admin/product/new", isAuthenticatedUser, authorizeRoles("admin"), createProduct);
// router.route("/admin/product/new").post(isAuthenticatedUser, authorizeCreateRole("admin"), createProduct);