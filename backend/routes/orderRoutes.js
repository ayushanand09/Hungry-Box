const express = require("express");
const { newOrder, getSingleOrder, myOrders, allOrders, updateStockAmt, deleteOrder } = require("../controllers/orderController");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);
// router.route("/order/:id").get(isAuthenticatedUser,getSingleOrder);
router.route("/orders/user").get(isAuthenticatedUser, myOrders);

router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"),allOrders);
router.route("/admin/order/:id").put(isAuthenticatedUser, authorizeRoles("admin"),updateStockAmt);
router.route("/admin/order/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteOrder);

module.exports = router;