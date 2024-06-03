import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { validateUsername } from '../../validation/validateUsername';
import { validatePassword } from '../../validation/validatePassword';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, setError, isLoading, error } = useLogin();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateUsername(username) || !validatePassword(password)) {
      setError('Incorrect username or password.');
      return;
    }

    login(username, password);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-10">
      <h1 className="text-center font-bold text-3xl text-white">Login</h1>
      <label htmlFor="username" className="font-bold text-slate-800 text-start">
        Username:
      </label>
      <input
        id="username"
        className="border rounded-lg p-2"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password" className="font-bold text-slate-800 text-start">
        Password:
      </label>
      <input
        id="password"
        className="border rounded-lg p-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="text-white bg-slate-800 hover:bg-slate-700 rounded-lg p-2"
        type="submit"
        disabled={isLoading}
      >
        Login
      </button>
      <p className="text-red-700 font-bold">{error}</p>
    </form>
  );
};

export default LoginForm;
