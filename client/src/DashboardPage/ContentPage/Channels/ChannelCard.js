import { Link } from 'react-router-dom';
import ChannelAvatar from './ChannelAvatar';

const ChannelCard = ({ channel }) => {
  return (
    <Link
      to={`/channel/${channel._id}`}
      className="h-fit mt-4"
      key={channel._id}
    >
      <div className="flex justify-center items-center gap-4">
        <ChannelAvatar channel={channel} />
        <div className="flex flex-col">
          <span className="font-bold text-lg">{channel?.title}</span>
          <span className="font-bold text-sm">{channel?.username}</span>
          <span className="text-red-700 font-bold text-sm">Offline</span>
        </div>
      </div>
    </Link>
  );
};

export default ChannelCard;
