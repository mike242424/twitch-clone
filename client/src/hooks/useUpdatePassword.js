import axios from 'axios';
import { useState } from 'react';
import { useUserDetails } from './useUserDetails';

export function useUpdatePassword() {
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { token } = useUserDetails();

  async function updatePassword(password, newPassword) {
    try {
      setLoading(true);
      setError('');

      await axios.patch(
        'https://twitch-clone-server.vercel.app/api/settings/password',
        { password, newPassword },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      window.location.reload();
    } catch (err) {
      console.log(err);
      setError('Incorrect Password.');
    } finally {
      setLoading(false);
    }
  }

  return { isLoading, error, updatePassword };
}
