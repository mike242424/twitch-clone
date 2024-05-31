import User from '../../models/User.js';

export const followChannel = async (req, res) => {
  try {
    const { userId } = req.user;
    const { channelId } = req.body;

    const user = await User.findById(userId, {
      followedChannels: 1,
      channel: 1,
    });

    if (!user) {
      return res.status(404).send({ error: 'User not found.' });
    }

    if (channelId === user.channel.toString()) {
      return res.status(400).send({ error: 'Cannot follow your own channel.' });
    }

    if (user.followedChannels.includes(channelId)) {
      return res
        .status(400)
        .send({ message: 'Already following this channel.' });
    }

    user.followedChannels.push(channelId);

    await user.save();

    return res.send({ message: 'Channel followed successfully' });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: 'Error occured.' });
  }
};
