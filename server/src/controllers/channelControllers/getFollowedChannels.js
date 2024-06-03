import User from '../../models/User.js';

export const getFollowedChannels = async (req, res) => {
  try {
    const { userId } = req.user;

    const user = await User.findById(
      userId,
      'username followedChannels',
    ).populate({
      path: 'followedChannels',
      select: '_id title avatarUrl',
      populate: {
        path: 'userId',
        select: 'username',
      },
    });

    if (!user) {
      return res.status(404).send({ error: 'User not found.' });
    }

    const channelsData = user.followedChannels.map((channel) => ({
      _id: channel._id,
      title: channel.title,
      avatarUrl: channel.avatarUrl,
      username: channel.userId.username,
      isOnline: false,
    }));

    return res.send({ followedChannels: channelsData });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: 'Error occurred.' });
  }
};
