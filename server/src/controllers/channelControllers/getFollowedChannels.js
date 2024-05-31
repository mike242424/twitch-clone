import User from '../../models/User.js';

export const getFollowedChannels = async (req, res) => {
  try {
    const { userId } = req.user;

    const user = await User.findById(userId, { followedChannels: 1 }).populate(
      'followedChannels',
    );

    if (!user) {
      return res.status(404).send({ error: 'User not found.' });
    }

    return res.send({ followedChannels: user.followedChannels });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: 'Error occurred.' });
  }
};
