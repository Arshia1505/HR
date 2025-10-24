import mongoose from 'mongoose';

const emailLogSchema = new mongoose.Schema({
  to: [{ type: String, required: true }],   // list of email addresses
  subject: { type: String, required: true },
  body: { type: String, required: true },
  type: { type: String, enum: ['warning','termination','appreciation'], required: true },
  sentBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default mongoose.model('EmailLog', emailLogSchema);
