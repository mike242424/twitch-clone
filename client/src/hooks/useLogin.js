import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateUsername } from '../validation/validateUsername';
import { validatePassword } from '../validation/validatePassword';

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      setError('');

      if (!validateUsername(username)) {
        setError(
          'Username must be between 3 and 30 characters with no spaces.',
        );
        return;
      }

      if (!validatePassword(password)) {
        setError(
          'Password must be between 3 and 30 characters with no spaces.',
        );
        return;
      }

      setIsLoading(true);

      const response = await axios.post(
        'http://localhost:3002/api/auth/login',
        {
          username,
          password,
        },
      );

      setIsLoading(false);

      const { userDetails } = response.data;

      localStorage.setItem('user', userDetails);

      navigate('/dashboard');
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return { login, isLoading, error };
}
