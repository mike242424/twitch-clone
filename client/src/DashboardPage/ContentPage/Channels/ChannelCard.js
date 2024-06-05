import { Link } from 'react-router-dom';
import ChannelAvatar from './ChannelAvatar';

const ChannelCard = ({ channel, isLargeText, hasTitle }) => {
  return (
    <Link
      to={`/channel/${channel?._id}`}
      className="h-fit mt-4"
      key={channel?._id}
    >
      <div className="flex justify-start items-center gap-4">
        <ChannelAvatar channel={channel} />
        <div className="flex flex-col">
          {hasTitle && (
            <span className="font-bold text-lg">{channel?.title}</span>
          )}
          <span className={`font-bold ${isLargeText ? 'text-lg' : 'text-sm'}`}>
            {channel?.username}
          </span>
          {!channel?.isOnline ? (
            <span className="text-red-700 font-bold text-sm">Offline</span>
          ) : (
            <span className="text-green-700 font-bold text-sm">Online</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ChannelCard;
