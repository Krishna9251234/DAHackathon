import mongoose from "mongoose";

const creditSchema = new mongoose.Schema({
  producer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  certifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // authority
  amountKg: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "certified", "purchased", "transferred", "retired"],
    default: "pending",
  },
  blockchainHash: { type: String }, // optional: store blockchain transaction hash
}, { timestamps: true });

export default mongoose.model("Credit", creditSchema);
