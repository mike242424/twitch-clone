import axios from 'axios';
import { useState } from 'react';
import { useUserDetails } from './useUserDetails';
import { useNavigate } from 'react-router-dom';

export function useUpdateChannelSettings() {
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { token } = useUserDetails();
  const navigate = useNavigate();

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

      navigate('/');
    } catch (err) {
      console.log(err);
      setError('Error updating settings');
    } finally {
      setLoading(false);
    }
  }

  return { isLoading, error, updateChannelSettings };
}
