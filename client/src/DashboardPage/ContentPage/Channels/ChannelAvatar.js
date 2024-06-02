import { Link } from 'react-router-dom';

const ChannelAvatar = ({ channel }) => {
  return (
    <Link to={`/channel/${channel?._id}`}>
      {channel?.avatarUrl === 'none' ? (
        <div className="bg-slate-500 w-16 h-16 rounded-full"></div>
      ) : (
        <img
          src={channel?.avatarUrl}
          alt="user Avatar"
          className="w-16 h-16 rounded-full"
        />
      )}
    </Link>
  );
};

export default ChannelAvatar;
