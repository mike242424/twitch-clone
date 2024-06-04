import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateUsername } from '../../../validation/validateUsername';
import { validateTitle } from '../../../validation/validateTitle';
import { validateDescription } from '../../../validation/validateDescription';
import { validateUrl } from '../../../validation/validateUrl';

const SettingsForm = ({ channelSettings, isLoading }) => {
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (channelSettings) {
      setUsername(channelSettings.username);
      setTitle(channelSettings.title);
      setDescription(channelSettings.description);
      setAvatarUrl(channelSettings.avatarUrl);
    }
  }, [channelSettings]);

  async function handleSubmit(e) {
    e.preventDefault();

    setError('');

    if (!validateUsername(username)) {
      setError(
        'Invalid username. Must be between 3 and 30 characters with no spaces allowed.',
      );
      return;
    }

    if (!validateTitle(title)) {
      setError('Invalid title. Must be between 3 and 30 characters.');
      return;
    }

    if (!validateDescription(description)) {
      setError('Invalid description. Must be between 10 and 200 characters.');
      return;
    }

    if (!validateUrl(avatarUrl)) {
      setError('Invalid Avatar Url.');
      return;
    }

    try {
      const userJson = localStorage.getItem('user');
      const user = userJson ? JSON.parse(userJson) : null;
      const token = user ? user.token : null;

      await axios.put(
        'http://localhost:3002/api/settings/channel',
        { username, title, description, avatarUrl },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      navigate('/');
    } catch (err) {
      console.log(err);
      setError('Error updating settings');
    }
  }
  return (
    <>
      <h3 className="text-center font-bold text-2xl text-slate-800 my-8">
        Update Channel Settings
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mb-4 w-4/6 md:w-3/6"
      >
        <label htmlFor="username" className="font-bold text-slate-800">
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
        <label htmlFor="title" className="font-bold text-slate-800">
          Title:
        </label>
        <input
          id="title"
          className="border rounded-lg p-2"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description" className="font-bold text-slate-800">
          Description:
        </label>
        <textarea
          id="description"
          className="border rounded-lg p-2"
          rows={5}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="avatarUrl" className="font-bold text-slate-800">
          Avatar URL:
        </label>
        <input
          id="avatarUrl"
          className="border rounded-lg p-2"
          type="text"
          placeholder="Avatar URL"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-slate-800 hover:bg-slate-700 rounded-lg p-2 border-slate-800 hover:border-slate-700 border-2 mt-10"
          disabled={isLoading}
        >
          Submit
        </button>
        <p className="text-red-700 font-bold">{error}</p>
      </form>
    </>
  );
};

export default SettingsForm;
