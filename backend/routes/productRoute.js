const router = require("express").Router();
const { getAllProducts, createProject, updateProduct, deleteProduct, getProductDetail } = require("../controller/productControlller");
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth");

router.get("/products", getAllProducts)
router.get("/product/:id",getProductDetail)
router.post("/product/new",isAuthenticatedUser,authorizeRole('admin'),createProject)
router.put("/product/:id",isAuthenticatedUser,authorizeRole('admin'),updateProduct)
router.delete("/product/:id",isAuthenticatedUser,authorizeRole('admin'),deleteProduct)

module.exports = router;
