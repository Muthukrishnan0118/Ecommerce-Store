const asyncHandler = require("express-async-handler");
const Order = require("../models/Order");

const createOrder = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, totalPrice } = req.body;

  const order = await Order.create({
    orderItems,
    shippingAddress,
    totalPrice,
  });

  res.status(201).json(order);
});

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });

  res.json(orders);
});
const markOrderDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404);
    throw new Error("Order not found");
  }

  order.isDelivered = true;
  order.deliveredAt = Date.now();

  const updatedOrder = await order.save();

  res.json(updatedOrder);
});
module.exports = {
  createOrder,
  getOrders,
  markOrderDelivered,
};
