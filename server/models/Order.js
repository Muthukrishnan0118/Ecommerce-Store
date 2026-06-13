const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    orderItems: [
      {
        name: String,
        qty: Number,
        image: String,
        price: Number,
        product: String,
      },
    ],

    shippingAddress: {
      fullName: String,
      phone: String,
      address: String,
      city: String,
      state: String,
      pincode: String,
    },

    totalPrice: {
      type: Number,
      required: true,
    },

    isDelivered: {
      type: Boolean,
      default: false,
    },

    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Order", orderSchema);
