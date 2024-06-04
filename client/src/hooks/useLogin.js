import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      setError('');

      setIsLoading(true);

      const response = await axios.post(
        'http://localhost:3002/api/auth/login',
        {
          username,
          password,
        },
      );

      const { userDetails } = response.data;

      localStorage.setItem('user', JSON.stringify(userDetails));

      navigate('/');
    } catch (err) {
      setError(err.response.data.error || 'Login failed.');
    } finally {
      setIsLoading(false);
    }
  };

  return { login, setError, isLoading, error };
}
