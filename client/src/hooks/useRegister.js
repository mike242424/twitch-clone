import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function register(username, email, password) {
    try {
      setError('');

      setIsLoading(true);

      const response = await axios.post(
        'https://twitch-clone-server.vercel.app/api/auth/register',
        {
          username,
          email,
          password,
        },
      );

      const { userDetails } = response.data;

      localStorage.setItem('user', JSON.stringify(userDetails));

      navigate('/');
    } catch (err) {
      setError(err.response.data.error || 'Register failed.');
    } finally {
      setIsLoading(false);
    }
  }

  return { register, setError, isLoading, error };
}
