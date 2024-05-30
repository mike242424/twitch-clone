import { useState } from 'react';

import { useLogin } from '../../hooks/useLogin';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useLogin();

  async function handleSubmit(e) {
    e.preventDefault();

    login(username, password);
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
        disabled={isLoading}
      >
        Login
      </button>
      <p className="text-red-700 font-bold">{error}</p>
    </form>
  );
};

export default LoginForm;
