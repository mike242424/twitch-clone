import User from '../../models/User.js';

export const unfollowChannel = async (req, res) => {
  try {
    const { userId } = req.user;
    const { channelId } = req.body;

    const user = await User.findById(userId, {
      followedChannels: 1,
    });

    if (!user) {
      return res.status(404).send({ error: 'User not found.' });
    }

    if (!user.followedChannels.includes(channelId)) {
      return res.status(400).send({ message: 'Not following this channel.' });
    }

    user.followedChannels = user.followedChannels.filter(
      (channel) => channel.toString() !== channelId,
    );

    await user.save();

    return res.send({ message: 'Channel unfollowed successfully' });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: 'Error occurred.' });
  }
};
