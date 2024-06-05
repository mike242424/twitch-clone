import { useEffect, useState } from 'react';
import { validatePassword } from '../../../validation/validatePassword';
import { useUpdatePassword } from '../../../hooks/useUpdatePassword';

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const {
    isLoading,
    error: updatePasswordError,
    updatePassword,
  } = useUpdatePassword();

  useEffect(() => {
    setError(updatePasswordError);
  }, [updatePasswordError]);

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

    updatePassword(currentPassword, newPassword);
  }

  return (
    <>
      <h3 className="text-center font-bold text-2xl text-slate-800 my-8">
        Reset Password
      </h3>
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
          disabled={isLoading}
        >
          Update Password
        </button>
        <p className="text-red-700 font-bold">{error}</p>
      </form>
    </>
  );
};

export default ChangePasswordForm;
