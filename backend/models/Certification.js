import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema({
  credit: { type: mongoose.Schema.Types.ObjectId, ref: "Credit", required: true },
  authority: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: { type: String, enum: ["approved", "rejected"], default: "approved" },
  notes: { type: String },
  blockchainHash: { type: String },
}, { timestamps: true });

export default mongoose.model("Certification", certificationSchema);
