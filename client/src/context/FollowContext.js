import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const FollowContext = createContext();

export const useFollow = () => useContext(FollowContext);

export const FollowProvider = ({ children }) => {
  const [followedChannels, setFollowedChannels] = useState([]);

  useEffect(() => {
    fetchFollowedChannels();
  }, []);

  const fetchFollowedChannels = async () => {
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;
    const token = user ? user.token : null;

    if (token) {
      try {
        const response = await axios.get(
          'http://localhost:3002/api/channels/followed',
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        setFollowedChannels(response.data.followedChannels);
      } catch (error) {
        console.error('Failed to fetch followed channels:', error);
      }
    }
  };

  const toggleFollow = async (channelId) => {
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;
    const token = user ? user.token : null;

    if (!token) {
      console.log('No token found');
      return;
    }

    try {
      const followedChannelIds = followedChannels.map(
        (channel) => channel?._id,
      );
      const isCurrentlyFollowing = followedChannelIds.includes(channelId);
      if (!isCurrentlyFollowing) {
        await axios.post(
          'http://localhost:3002/api/channels/follow',
          { channelId },
          { headers: { Authorization: `Bearer ${token}` } },
        );
      } else {
        await axios.delete('http://localhost:3002/api/channels/follow', {
          headers: { Authorization: `Bearer ${token}` },
          data: { channelId },
        });
      }
      fetchFollowedChannels();
    } catch (error) {
      console.error('Error toggling follow status:', error);
    }
  };

  return (
    <FollowContext.Provider value={{ followedChannels, toggleFollow }}>
      {children}
    </FollowContext.Provider>
  );
};
