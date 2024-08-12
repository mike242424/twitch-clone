import axios from 'axios';
import { useState } from 'react';
import { useUserDetails } from './useUserDetails';

export function useGetFollowedChannels() {
  const [followedChannels, setFollowedChannels] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { token } = useUserDetails();

  async function getFollowedChannels() {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get(
        'http://localhost:3002/api/channels/followed',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setFollowedChannels(response.data.followedChannels);
    } catch (err) {
      console.log(err);
      setError(err.message || 'Failed to fetch followed channels.');
    } finally {
      setLoading(false);
    }
  }

  return { isLoading, followedChannels, error, getFollowedChannels };
}
