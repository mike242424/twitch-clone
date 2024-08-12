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
      <h1 className="text-center font-bold text-3xl text-slate-800 my-8">
        All Channels
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 gap-4 w-full px-10">
        {channels?.map((channel) => (
          <div
            key={channel._id}
            className="flex flex-col pb-8 hover:bg-slate-400 rounded-lg p-2"
          >
            {channel?.isOnline && channel?.streamUrl ? (
              <Stream channel={channel} isControls={false} isPlaying={false} />
            ) : (
              <div className="flex items-center justify-center bg-slate-300 w-[100%] h-[225px] sm:h-[100%]">
                <span className=" text-slate-800 font-bold">
                  Currently Offline
                </span>
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
