// // src/models/User.js
// import mongoose from 'mongoose';

// const UserSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   name: String,
//   role: { type: String, enum: ['admin', 'manager', 'member'], default: 'member' },
//   avatarUrl: String,
//   profile: {
//     bio: String,
//     skills: [String],
//     contactVisibleTo: { type: String, enum: ['team','admin','none'], default: 'team' },
//   }
// }, { timestamps: true });

// export default mongoose.models.User || mongoose.model('User', UserSchema);

// src/models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
  name: String,
  role: { type: String, enum: ['admin', 'manager', 'member'], default: 'member' },
  avatarUrl: String,
  profile: {
    bio: String,
    skills: [String],
    contactVisibleTo: { type: String, enum: ['team','admin','none'], default: 'team' },
  }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
