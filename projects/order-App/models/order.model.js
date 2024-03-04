const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default:1
  },
});

const order = mongoose.model("order", orderSchema);

module.exports = order;
