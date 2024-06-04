import axios from 'axios';
import { useState } from 'react';
import { useUserDetails } from './useUserDetails';
import { useNavigate } from 'react-router-dom';

export function useUpdatePassword() {
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { token } = useUserDetails();
  const navigate = useNavigate();

  async function updatePassword(password, newPassword) {
    try {
      setLoading(true);

      await axios.patch(
        'http://localhost:3002/api/settings/password',
        { password, newPassword },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      navigate('/');
    } catch (err) {
      console.log(err);
      setError('Error updating password.');
    } finally {
      setLoading(false);
    }
  }

  return { isLoading, error, updatePassword };
}
