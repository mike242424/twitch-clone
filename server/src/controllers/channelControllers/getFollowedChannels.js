import axios from 'axios';
import User from '../../models/User.js';

export const getFollowedChannels = async (req, res) => {
  try {
    const { userId } = req.user;

    const user = await User.findById(
      userId,
      'username followedChannels',
    ).populate({
      path: 'followedChannels',
      select: '_id title avatarUrl streamKey',
      populate: {
        path: 'userId',
        select: 'username',
      },
    });

    if (!user) {
      return res.status(404).send({ error: 'User not found.' });
    }

    const response = await axios.get(
      'https://twitch-clone-rtmp.vercel.app/api/streams',
    );

    const liveStreams = [];

    for (const streamId in response.data?.live) {
      if (
        response.data.live[streamId].publisher &&
        response.data.live[streamId].publisher !== null
      ) {
        liveStreams.push(streamId);
      }
    }

    const channelsData = user.followedChannels.map((channel) => ({
      _id: channel._id,
      title: channel.title,
      avatarUrl: channel.avatarUrl,
      username: channel.userId.username,
      isOnline: liveStreams.includes(channel.streamKey),
    }));

    return res.send({ followedChannels: channelsData });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: 'Error occurred.' });
  }
};
