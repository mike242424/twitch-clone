import { useState } from 'react';
import axios from 'axios';
import { validateUsername } from '../../validation/validateUsername';
import { validatePassword } from '../../validation/validatePassword';
import { validateEmail } from '../../validation/validateEmail';
import Loading from '../../Components/Loading';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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

      const { data } = await axios.post(
        'http://localhost:3002/api/auth/register',
        {
          username,
          email,
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-20">
      <h1 className="text-center font-bold text-3xl  mb-10 text-white">
        Register
      </h1>
      <input
        className="border rounded-lg p-2"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border rounded-lg p-2"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        Register
      </button>
      <p className="text-red-700 font-bold">{error}</p>
    </form>
  );
};

export default RegisterForm;
