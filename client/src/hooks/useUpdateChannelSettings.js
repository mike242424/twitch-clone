import axios from 'axios';
import { useState } from 'react';
import { useUserDetails } from './useUserDetails';

export function useUpdateChannelSettings() {
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { token } = useUserDetails();

  async function updateChannelSettings(
    username,
    title,
    description,
    avatarUrl,
  ) {
    try {
      setLoading(true);

      await axios.put(
        'http://localhost:3002/api/settings/channel',
        { username, title, description, avatarUrl },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      window.location.reload();
    } catch (err) {
      console.log(err);
      setError('Invalid avatar url.');
    } finally {
      setLoading(false);
    }
  }

  return { isLoading, error, updateChannelSettings };
}
