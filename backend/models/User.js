import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["producer", "buyer", "authority"],
    default: "buyer",
  },
  walletAddress: { type: String }, // optional for blockchain wallet
  verified: { type: Boolean, default: false }, // only for authorities
}, { timestamps: true });

export default mongoose.model("User", userSchema);
