import ChannelCard from './ChannelCard';
import { useFollow } from '../../../context/FollowContext';

const ChannelBody = ({ channel }) => {
  const { followedChannels, toggleFollow } = useFollow();
  const followedChannelIds = followedChannels.map((channel) => channel?._id);
  const isFollowing = followedChannelIds.includes(channel?._id);
  const userJson = localStorage.getItem('user');
  const user = userJson ? JSON.parse(userJson) : null;
  const username = user ? user.username : '';

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex justify-center items-center w-full bg-slate-200 h-[400px]">
        <span className="font-bold">Channel is offline</span>
      </div>
      <div className="flex flex-col items-start p-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-start items-center gap-4 p-4">
            <ChannelCard channel={channel} />
          </div>
          {username !== channel?.username && (
            <div className="p-4">
              <button
                className={`${
                  isFollowing ? 'bg-slate-400' : 'bg-slate-800'
                } p-3 rounded-lg text-white font-bold`}
                onClick={() => toggleFollow(channel?._id)}
              >
                {isFollowing ? 'Unfollow' : 'Follow'}
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col my-4 p-4">
          <h3 className="font-bold text-md">About {channel?.username}</h3>
          <span className="font-bold text-sm">{channel?.description}</span>
        </div>
      </div>
    </div>
  );
};

export default ChannelBody;
