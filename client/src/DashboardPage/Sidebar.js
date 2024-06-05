import { useEffect } from 'react';
import ChannelAvatar from './ContentPage/Channels/ChannelAvatar';
import ChannelCard from './ContentPage/Channels/ChannelCard';
import { useGetFollowedChannels } from '../hooks/useGetFollowedChannels';

const Sidebar = () => {
  const { followedChannels, getFollowedChannels } = useGetFollowedChannels();

  console.log(followedChannels);

  useEffect(() => {
    getFollowedChannels();
  }, []);

  return (
    <div
      className={`bg-slate-300 text-slate-800 hidden md:block sm:w-18 xl:w-64 p-2 xl:p-6 ${
        followedChannels?.length > 0 ? '' : 'w-20'
      } `}
    >
      <span className="hidden xl:block font-bold">FOLLOWED CHANNELS</span>
      <div className="flex flex-col items-start mt-6">
        {followedChannels?.map((channel) => (
          <div key={channel._id} className="my-2">
            <div className="xl:hidden">
              <ChannelAvatar channel={channel} isLink={true} />
            </div>
            <div className="hidden xl:block">
              <ChannelCard
                channel={channel}
                isLargeText={true}
                isSmall={true}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
