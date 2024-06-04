import axios from 'axios';
import { useState } from 'react';
import { useUserDetails } from './useUserDetails';

export function useChannelSettings() {
  const [channelSettings, setChannelSettings] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { token } = useUserDetails();

  async function getChannelSettings() {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get(
        'http://localhost:3002/api/settings/channel',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setChannelSettings(response.data);
    } catch (err) {
      console.log(err);
      setError(err.message || 'Failed to fetch channel settings.');
    } finally {
      setLoading(false);
    }
  }

  return { isLoading, channelSettings, error, getChannelSettings };
}
