import ChannelAvatar from './ContentPage/Channels/ChannelAvatar';
import ChannelCard from './ContentPage/Channels/ChannelCard';
import { useFollow } from '../context/FollowContext';

const Sidebar = () => {
  const { followedChannels } = useFollow();

  return (
    <div
      className={`bg-slate-300 text-slate-800 hidden md:block sm:w-18 xl:w-64 p-2 xl:p-6 ${
        followedChannels.length > 0 ? '' : 'w-20'
      } `}
    >
      <span className="hidden xl:block font-bold">FOLLOWED CHANNELS</span>
      <div className="mt-6">
        {followedChannels?.map((channel) => (
          <div key={channel._id}>
            <div className="xl:hidden">
              <ChannelAvatar channel={channel} />
            </div>
            <div className="hidden xl:block">
              <ChannelCard channel={channel} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
