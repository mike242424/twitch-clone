import User from '../../models/User.js';

export async function getUserDetails(req, res) {
  const { userId } = req.user;

  const user = await User.findById(userId, {
    username: 1,
    email: 1,
    channel: 1,
  }).populate('channel', ['avatarUrl']);

  if (!user) {
    return res.status(404).send({ error: 'User not found.' });
  }

  return res.send({ user });
}
