import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema(
  {
    address: {
      type: mongoose.Types.ObjectId,
      ref: "Address",
    },
    User: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["payment_pending", "payment_success", "payment_errored"],
    },
    products: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Order = new mongoose.model("Order", OrderSchema);

export default Order;
