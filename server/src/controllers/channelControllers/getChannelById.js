import axios from 'axios';
import User from '../../models/User.js';
import Channel from '../../models/Channel.js';

export const getChannelById = async (req, res) => {
  try {
    const { channelId } = req.params;

    const channel = await Channel.findById(channelId);

    if (!channel || !channel.isActive) {
      return res.status(404).send({ error: 'Channel not found.' });
    }

    const user = await User.findOne({ channel: channelId }, { username: 1 });

    const streamUrl = `http://localhost:8000/live/${channel.streamKey}.flv`;

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

    const isOnline = liveStreams.includes(channel.streamKey);

    return res.send({
      channelDetails: {
        _id: channel._id,
        username: user.username,
        title: channel.title,
        description: channel.description,
        avatarUrl: channel.avatarUrl,
        isOnline,
        streamUrl,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: 'Error occured.' });
  }
};
