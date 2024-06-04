import { Link } from 'react-router-dom';

const ChannelAvatar = ({ channel, isLink, height, width }) => {
  const avatarContent =
    channel?.avatarUrl === 'none' ? (
      <div
        className={`${height ? 'h-10' : 'h-16'} ${
          width ? 'w-10' : 'w-16'
        } bg-slate-500 w-10 h-10 rounded-full`}
      ></div>
    ) : (
      <img
        src={channel?.avatarUrl}
        alt="user Avatar"
        className={`${width ? 'w-10' : 'w-16'} ${
          height ? 'h-10' : 'h-16'
        } rounded-full`}
      />
    );

  if (isLink) {
    return <Link to={`/channel/${channel?._id}`}>{avatarContent}</Link>;
  } else {
    return avatarContent;
  }
};

export default ChannelAvatar;
