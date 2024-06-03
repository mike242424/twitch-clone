import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validatePassword } from '../../../validation/validatePassword';

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    setError('');

    if (!validatePassword(currentPassword)) {
      setError('Incorrect Password.');
      return;
    }

    if (!validatePassword(newPassword)) {
      setError('New password is invalid. Must be between 3 and 30 characters.');
      return;
    }

    try {
      const userJson = localStorage.getItem('user');
      const user = userJson ? JSON.parse(userJson) : null;
      const token = user ? user.token : null;

      await axios.patch(
        'http://localhost:3002/api/settings/password',
        { password: currentPassword, newPassword },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      navigate('/dashboard');
    } catch (err) {
      console.log(err);
      setError('Incorrect Password.');
    }
  }
  return (
    <div className="flex flex-col justify-center items-center w-full mb-10">
      <h1 className="text-center font-bold text-3xl text-slate-800 my-8">
        Reset Password
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mb-4 w-4/6 md:w-3/6"
      >
        <label htmlFor="currentPassword" className="font-bold text-slate-800">
          Current Password:
        </label>
        <input
          id="currentPassword"
          className="border rounded-lg p-2"
          type="text"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <label htmlFor="newPassword" className="font-bold text-slate-800">
          New Password:
        </label>
        <input
          id="newPassword"
          className="border rounded-lg p-2"
          type="text"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-slate-800 hover:bg-slate-700 rounded-lg p-2 border-slate-800 hover:border-slate-700 border-2 mt-10"
        >
          Submit
        </button>
        <p className="text-red-700 font-bold">{error}</p>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
