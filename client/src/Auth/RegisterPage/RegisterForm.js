import { useState } from 'react';
import { useRegister } from '../../hooks/useRegister';
import { validateUsername } from '../../validation/validateUsername';
import { validateEmail } from '../../validation/validateEmail';
import { validatePassword } from '../../validation/validatePassword';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register, setError, isLoading, error } = useRegister();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateUsername(username)) {
      setError('Username must be between 3 and 30 characters with no spaces.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be between 3 and 30 characters with no spaces.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    register(username, email, password);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-10">
      <h1 className="text-center font-bold text-3xl text-white">Register</h1>
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
      <label htmlFor="email" className="font-bold text-slate-800 text-start">
        Email:
      </label>
      <input
        id="email"
        className="border rounded-lg p-2"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      <label
        htmlFor="confirmPassword"
        className="font-bold text-slate-800 text-start"
      >
        Confirm Password:
      </label>
      <input
        id="confirmPassword"
        className="border rounded-lg p-2"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        className="text-white bg-slate-800 hover:bg-slate-700 rounded-lg p-2 border-slate-800 hover:border-slate-700 border-2 mt-10"
        type="submit"
        disabled={isLoading}
      >
        Register
      </button>
      <p className="text-red-700 font-bold">{error}</p>
    </form>
  );
};

export default RegisterForm;
