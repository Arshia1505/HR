// // src/models/Template.js
// import mongoose from 'mongoose';

// const TemplateSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   subjectTemplate: { type: String, default: '' },
//   bodyHtmlTemplate: { type: String, default: '' }, // store sanitized HTML or plain text
//   creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   editable: { type: Boolean, default: true },
// }, { timestamps: true });

// export default mongoose.models.Template || mongoose.model('Template', TemplateSchema);

// src/models/Template.js
import mongoose from 'mongoose';

const TemplateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subjectTemplate: { type: String, default: '' },
  bodyHtmlTemplate: { type: String, default: '' }, // store sanitized HTML or plain text
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  editable: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.models.Template || mongoose.model('Template', TemplateSchema);
