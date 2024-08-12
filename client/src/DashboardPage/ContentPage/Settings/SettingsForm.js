import { useEffect, useState } from 'react';
import { validateUsername } from '../../../validation/validateUsername';
import { validateTitle } from '../../../validation/validateTitle';
import { validateDescription } from '../../../validation/validateDescription';
import { useUpdateChannelSettings } from '../../../hooks/useUpdateChannelSettings';

const SettingsForm = ({ channelSettings }) => {
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [error, setError] = useState('');
  const {
    updateChannelSettings,
    isLoading,
    error: updateChannelSettingsError,
  } = useUpdateChannelSettings();

  useEffect(() => {
    setUsername(channelSettings?.username);
    setTitle(channelSettings?.title);
    setDescription(channelSettings?.description);
    setAvatarUrl(channelSettings?.avatarUrl);
  }, [channelSettings]);

  useEffect(() => {
    setError(updateChannelSettingsError);
  }, [updateChannelSettingsError]);

  async function handleSubmit(e) {
    e.preventDefault();

    setError('');

    if (!validateUsername(username)) {
      setError(
        'Invalid username. Must be between 3 and 10 characters with no spaces allowed.',
      );
      return;
    }

    if (!validateTitle(title)) {
      setError('Invalid title. Must be between 3 and 15 characters.');
      return;
    }

    if (!validateDescription(description)) {
      setError('Invalid description. Must be between 10 and 200 characters.');
      return;
    }

    updateChannelSettings(username, title, description, avatarUrl);
  }
  return (
    <>
      <h3 className="text-center font-bold text-2xl text-white my-8">
        Update Channel Settings
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mb-4 w-4/6 md:w-3/6"
      >
        <label htmlFor="username" className="font-bold text-white">
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
        <label htmlFor="title" className="font-bold text-white">
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
        <label htmlFor="description" className="font-bold text-white">
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
        <label htmlFor="avatarUrl" className="font-bold text-white">
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
          className="text-white bg-violet-900 hover:bg-violet-800 rounded-lg p-2 border-violet-900 hover:border-violet-800 border-2 mt-10"
          disabled={isLoading}
        >
          Update Channel Settings
        </button>
        <p className="text-red-700 font-bold">{error}</p>
      </form>
    </>
  );
};

export default SettingsForm;
