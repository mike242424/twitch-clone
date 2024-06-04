import { useEffect } from 'react';
import { useChannelSettings } from '../../../hooks/useChannelSettings';
import SettingsForm from './SettingsForm';
import ChangePasswordForm from './ChangePasswordForm';
import StreamKey from './StreamKey';

const Settings = () => {
  const { channelSettings, getChannelSettings } = useChannelSettings();

  useEffect(() => {
    getChannelSettings();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center font-bold text-3xl text-slate-800 my-8">
        Account Settings
      </h1>
      <div className="flex flex-col items-center bg-slate-400 p-6 rounded-lg shadow-md mb-6 w-11/12 md:w-10/12 lg:w-9/12">
        <SettingsForm channelSettings={channelSettings} />
      </div>
      <div className="flex flex-col items-center bg-slate-400 p-6 rounded-lg shadow-md mb-6 w-11/12 md:w-10/12 lg:w-9/12">
        <ChangePasswordForm />
      </div>
      <StreamKey streamKey={channelSettings?.streamKey} />
    </div>
  );
};

export default Settings;
