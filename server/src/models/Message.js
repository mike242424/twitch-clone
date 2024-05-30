import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  author: { type: String },
  content: { type: String },
  date: { type: Date, default: Date.now() },
});

export default mongoose.model('Message', messageSchema);
