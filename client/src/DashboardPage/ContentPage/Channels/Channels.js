import { useEffect } from 'react';
import ChannelCard from './ChannelCard';
import { useGetChannels } from '../../../hooks/useGetChannels';
import LoadingSpinner from '../../../Components/LoadingSpinner';
import Stream from './Stream';

const Channels = () => {
  const { channels, getChannels, isLoading } = useGetChannels();

  useEffect(() => {
    getChannels();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <h1 className="text-center font-bold text-3xl text-violet-800 my-8">
        All Channels
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 p-2 gap-4 w-full h-full px-10">
        {channels?.map((channel) => (
          <div
            key={channel._id}
            className="grid sm:grid-cols-1 pb-8 hover:bg-violet-400 rounded-lg p-2"
          >
            {channel?.isOnline && channel?.streamUrl ? (
              <Stream channel={channel} isControls={false} isPlaying={false} />
            ) : (
              <div className="relative w-full h-0 pb-[56.25%] bg-slate-200 flex items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <span className="text-violet-800 font-bold">
                    Currently Offline
                  </span>
                </div>
              </div>
            )}
            <ChannelCard channel={channel} hasTitle={true} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Channels;
