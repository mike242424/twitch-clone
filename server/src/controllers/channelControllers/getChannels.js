import axios from 'axios';
import User from '../../models/User.js';

export const getChannels = async (req, res) => {
  try {
    const users = await User.find({}, { username: 1, channel: 1 }).populate(
      'channel',
    );

    const response = await axios.get('http://localhost:8000/api/streams');

    const liveStreams = [];

    for (const streamId in response.data?.live) {
      if (
        response.data.live[streamId].publisher &&
        response.data.live[streamId].publisher !== null
      ) {
        liveStreams.push(streamId);
      }
    }

    const channels = users
      .filter((user) => user.channel.isActive)
      .map((user) => {
        return {
          _id: user.channel._id,
          title: user.channel.title,
          avatarUrl: user.channel.avatarUrl,
          username: user.username,
          isOnline: liveStreams.includes(user.channel?.streamKey),
          streamUrl: `http://localhost:8000/live/${user.channel.streamKey}.flv`,
        };
      });

    return res.send({ channels });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: 'Error occured.' });
  }
};
