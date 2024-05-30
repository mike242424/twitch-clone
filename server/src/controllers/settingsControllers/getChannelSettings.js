import Channel from '../../models/Channel.js';
import User from '../../models/User.js';

export const getChannelSettings = async (req, res) => {
  try {
    const { userId } = req.user;

    const user = await User.findOne(
      { _id: userId },
      { channel: 1, username: 1 },
    ).populate('channel');

    res.send({
      id: user.channel._id,
      username: user.username,
      title: user.channel.title,
      description: user.channel.description,
      avatarUrl: user.channel.avatarUrl,
      streamKey: user.channel.streamKey,
    });
  } catch (er) {
    console.log(err);
    return res.status(500).send({ error: 'Error occured.' });
  }
};
