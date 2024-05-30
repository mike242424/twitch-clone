import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { validateUsername } from '../validation/validateUsername';
import { validatePassword } from '../validation/validatePassword';
import { validateEmail } from '../validation/validateEmail';

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function register(username, email, password) {
    try {
      setError('');

      if (!validateUsername(username)) {
        setError(
          'Username must be between 3 and 30 characters with no spaces.',
        );
        return;
      }

      if (!validateEmail(email)) {
        setError('Please enter a valid email address.');
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

  return { register, isLoading, error };
}
