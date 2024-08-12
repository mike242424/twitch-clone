import { useState } from 'react';
import axios from 'axios';
import { useUserDetails } from './useUserDetails';

export function useFollowStatus() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { token } = useUserDetails();

  async function getIsFollowing(channel) {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get(
        `https://twitch-clone-server.vercel.app/api/channels/followed`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const followedChannelIds = response.data.followedChannels.map(
        (channel) => channel._id,
      );
      const isCurrentlyFollowing = followedChannelIds.includes(channel?._id);

      setIsFollowing(isCurrentlyFollowing);
    } catch (err) {
      console.log(err);
      setError(
        err.message || 'Failed to fetch following status for the channel',
      );
    } finally {
      setLoading(false);
    }
  }

  async function toggleFollow(channelId) {
    try {
      setError('');
      setLoading(true);

      if (!isFollowing) {
        await axios.post(
          'https://twitch-clone-server.vercel.app/api/channels/follow',
          { channelId },
          { headers: { Authorization: `Bearer ${token}` } },
        );
      } else {
        await axios.delete(
          'https://twitch-clone-server.vercel.app/api/channels/follow',
          {
            headers: { Authorization: `Bearer ${token}` },
            data: { channelId },
          },
        );
      }

      window.location.reload();
      setIsFollowing(!isFollowing);
    } catch (err) {
      console.log(err);
      setError(err.message || 'Failed to toggle follow status');
    } finally {
      setLoading(false);
    }
  }

  return { isFollowing, toggleFollow, getIsFollowing, isLoading, error };
}
