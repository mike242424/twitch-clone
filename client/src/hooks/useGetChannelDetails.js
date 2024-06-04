import axios from 'axios';
import { useState } from 'react';
import { useUserDetails } from './useUserDetails';

export function useGetChannelDetails() {
  const [channel, setChannel] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { token } = useUserDetails();

  async function getChannelDetails(channelId) {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get(
        `http://localhost:3002/api/channels/${channelId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setChannel(response.data.channelDetails);
    } catch (err) {
      console.log(err);
      setError(err.message || 'Failed to fetch channel details.');
    } finally {
      setLoading(false);
    }
  }

  return { isLoading, channel, error, getChannelDetails };
}
