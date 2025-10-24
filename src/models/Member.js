// import mongoose from 'mongoose';
// const MemberSchema = new mongoose.Schema({
//   name: { type: String, required: true, trim: true },
//   password: { type: String, required: true },
//   email: { type: String, required: true, lowercase: true, trim: true, index: true },
//   role: { type: String, default: '' },
//   team: {type: String, required: true,lowercase: true, trim: true},
//   skills: { type: [String], default: [] },
//   onboarded: { type: Boolean, default: false },
//   createdAt: { type: Date, default: Date.now },
// }, { timestamps: true });

// // Prevent model overwrite compile errors in dev
// export default mongoose.models.Member || mongoose.model('Member', MemberSchema);


import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const MemberSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  surname: { type: String, trim: true },               // new
  email: { type: String, required: true, lowercase: true, trim: true, index: true },
  password: { type: String, required: true },
  role: { type: String, default: '' },
  team: { type: String, required: true, lowercase: true, trim: true },
  skills: { type: [String], default: [] },
  department: { type: String, trim: true },           // new
  cluster: { type: String, trim: true },              // new
  bio: { type: String, trim: true },                  // new
  interests: { type: [String], default: [] },         // new
  avatarUrl: { type: String },                        // new
  onboarded: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

// Password comparison helper
MemberSchema.methods.comparePassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.models.Member || mongoose.model('Member', MemberSchema);
