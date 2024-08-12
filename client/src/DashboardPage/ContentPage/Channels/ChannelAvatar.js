import { Link } from 'react-router-dom';

const ChannelAvatar = ({ channel, isLink, isSmall }) => {
  const avatarContent =
    channel?.avatarUrl === 'none' ? (
      <div
        className={`${
          isSmall ? 'h-10 w-10' : 'h-16 w-16'
        } bg-violet-500 rounded-full`}
      ></div>
    ) : (
      <img
        src={channel?.avatarUrl}
        alt="user Avatar"
        className={`${isSmall ? 'h-10 w-10' : 'h-16 w-16'}  rounded-full`}
      />
    );

  if (isLink) {
    return <Link to={`/channel/${channel?._id}`}>{avatarContent}</Link>;
  } else {
    return avatarContent;
  }
};

export default ChannelAvatar;
