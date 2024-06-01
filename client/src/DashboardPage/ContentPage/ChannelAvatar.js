const ChannelAvatar = ({ avatarUrl }) => {
  return (
    <div>
      {avatarUrl === 'none' ? (
        <span className="bg-slate-300 w-16 h-16 rounded-full"></span>
      ) : (
        <img
          src={avatarUrl}
          alt="user Avatar"
          className="w-16 h-16 rounded-full"
        />
      )}
    </div>
  );
};

export default ChannelAvatar;
