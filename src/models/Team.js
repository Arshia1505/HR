// // src/models/Team.js
// import mongoose from 'mongoose';

// const TeamMemberSubSchema = new mongoose.Schema({
//   member: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true },
//   role: { type: String, default: '' },
//   joinedAt: { type: Date, default: Date.now },
// }, { _id: false });

// const TeamSchema = new mongoose.Schema({
//   name: { type: String, required: true, trim: true },
//   slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
//   description: { type: String, default: '' },
//   members: { type: [TeamMemberSubSchema], default: [] },
// }, { timestamps: true });

// export default mongoose.models.Team || mongoose.model('Team', TeamSchema);

// src/models/Team.js
import mongoose from 'mongoose';

const TeamMemberSubSchema = new mongoose.Schema({
  member: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true },
  role: { type: String, default: '' },
  joinedAt: { type: Date, default: Date.now },
}, { _id: false });

const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  description: { type: String, default: '' },
  members: { type: [TeamMemberSubSchema], default: [] },
}, { timestamps: true });

export default mongoose.models.Team || mongoose.model('Team', TeamSchema);
