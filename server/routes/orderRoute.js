const express = require("express");
const {
  createOrder,
  getOrders,
  markOrderDelivered,
} = require("../controllers/orderController");

const router = express.Router();

router.post("/", createOrder);
router.get("/", getOrders);
router.put("/:id/deliver", markOrderDelivered);

module.exports = router;
