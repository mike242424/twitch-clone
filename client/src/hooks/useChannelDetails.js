import axios from 'axios';
import { useState } from 'react';
import { useUserDetails } from './useUserDetails';

export function useChannelDetails() {
  const [channel, setChannel] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { token } = useUserDetails();

  async function getChannel(id) {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get(`http://localhost:3002/api/channel/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setChannel(response.data);
    } catch (err) {
      console.log(err);
      setError(err.message || 'Failed to fetch channel settings');
    } finally {
      setLoading(false);
    }
  }

  return { isLoading, channel, error, getChannel };
}
