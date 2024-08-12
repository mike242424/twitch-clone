import axios from 'axios';
import { useState } from 'react';

export function useGetChannels() {
  const [channels, setChannels] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  async function getChannels() {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get(
        'https://twitch-clone-server.vercel.app/api/channels/',
      );

      setChannels(response.data.channels);
    } catch (err) {
      console.log(err);
      setError(err.message || 'Failed to fetch channels.');
    } finally {
      setLoading(false);
    }
  }

  return { isLoading, channels, error, getChannels };
}
