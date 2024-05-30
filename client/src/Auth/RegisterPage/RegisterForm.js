import { useState } from 'react';
import axios from 'axios';
import { useRegister } from '../../hooks/useRegister';

const RegisterForm = ({ setIsLoading }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, isLoading, error } = useRegister();

  async function handleSubmit(e) {
    e.preventDefault();

    register(username, email, password);
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
        disabled={isLoading}
      >
        Register
      </button>
      <p className="text-red-700 font-bold">{error}</p>
    </form>
  );
};

export default RegisterForm;
