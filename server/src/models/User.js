import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  channel: {
    type: Schema.Types.ObjectId,
    ref: 'Channel',
  },
  followedChannels: { type: [{ type: Schema.Types.ObjectId, ref: 'Channel' }] },
});

export default mongoose.model('User', userSchema);
