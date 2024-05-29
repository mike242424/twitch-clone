import { useState } from 'react';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
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
          className="text-white bg-slate-800 rounded-lg p-2"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
