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
        'http://localhost:3002/api/auth/register',
        {
          username,
          email,
          password,
        },
      );

      setIsLoading(false);

      const { userDetails } = response.data;

      localStorage.setItem('user', userDetails);

      navigate('/dashboard');
    } catch (error) {
      setError();
    }
  }

  return { register, setError, isLoading, error };
}
