const mongoose = require("mongoose");
const orderSchema = require("../schemas/OrdersSchema");

const orderModel = mongoose.model("order",orderSchema);

module.exports = orderModel;