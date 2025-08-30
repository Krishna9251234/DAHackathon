import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  credit: { type: mongoose.Schema.Types.ObjectId, ref: "Credit", required: true },
  from: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // seller or producer
  to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },   // buyer or recipient
  type: {
    type: String,
    enum: ["purchase", "transfer", "retire"],
    required: true,
  },
  amountKg: { type: Number, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  blockchainHash: { type: String }, // optional: record transaction hash
}, { timestamps: true });

export default mongoose.model("Transaction", transactionSchema);
