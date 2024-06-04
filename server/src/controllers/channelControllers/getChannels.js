import User from '../../models/User.js';

export const getChannels = async (req, res) => {
  try {
    const users = await User.find({}, { username: 1, channel: 1 }).populate(
      'channel',
    );

    const channels = users
      .filter((user) => user.channel.isActive)
      .map((user) => {
        return {
          _id: user.channel._id,
          title: user.channel.title,
          avatarUrl: user.channel.avatarUrl,
          username: user.username,
          isOnline: false, // todo
        };
      });

    return res.send({ channels });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: 'Error occured.' });
  }
};
