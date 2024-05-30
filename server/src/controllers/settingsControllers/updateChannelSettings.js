import Channel from '../../models/Channel.js';
import User from '../../models/User.js';

export const updateChannelSettings = async (req, res) => {
  try {
    const { userId } = req.user;
    const { title, description, avatarUrl, username } = req.body;

    const userData = await User.findById(userId, { username: 1, channel: 1 });

    if (userData.username !== username) {
      await User.updateOne({ _id: userId }, { username });
    }

    const updatedChannel = await Channel.findByIdAndUpdate(
      userData.channel,
      {
        title,
        description,
        avatarUrl,
        isActive: true,
      },
      { new: true },
    );

    res.send({
      channelId: updatedChannel._id,
      username,
      title: updatedChannel.title,
      description: updatedChannel.description,
      avatarUrl: updatedChannel.avatarUrl,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: 'Error occured.' });
  }
};
