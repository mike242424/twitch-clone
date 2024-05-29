import { useState } from 'react';
import axios from 'axios';
import { validateUsername } from '../../validation/validateUsername';
import { validatePassword } from '../../validation/validatePassword';

const LoginForm = ({ setIsLoading }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    try {
      e.preventDefault();
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

      const { data } = await axios.post(
        'http://localhost:3002/api/auth/login',
        {
          username,
          password,
        },
      );

      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-20">
      <h1 className="text-center font-bold text-3xl text-white mb-10">Login</h1>
      <input
        className="border rounded-lg p-2"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border rounded-lg p-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="text-white bg-slate-800 hover:bg-slate-700 rounded-lg p-2"
        type="submit"
      >
        Login
      </button>
      <p className="text-red-700 font-bold">{error}</p>
    </form>
  );
};

export default LoginForm;
