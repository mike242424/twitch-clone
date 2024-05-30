import mongoose, { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

const channelSchema = new mongoose.Schema({
  isActive: { type: Boolean, default: false },
  title: { type: String, default: 'New Channel' },
  description: { type: String, default: 'This is a new channel description' },
  avatarUrl: { type: String, default: 'none' },
  streamKey: { type: String, default: uuid() },
  messages: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    default: [],
  },
});

export default mongoose.model('Channel', channelSchema);
