import ChannelAvatar from './ChannelAvatar';

const ChannelBody = ({ channel }) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex justify-center items-center w-full bg-slate-200 h-[400px]">
        <span className="font-bold">Channel is offline</span>
      </div>
      <div className="flex justify-start items-center gap-4 p-4">
        <ChannelAvatar avatarUrl={channel?.avatarUrl} />
        <div className="flex flex-col mt-4">
          <span className="font-bold text-lg">{channel?.title}</span>
          <span className="font-bold text-sm">{channel?.username}</span>
          <span className="text-red-700 font-bold text-sm">Offline</span>
        </div>
      </div>
      <div className="flex flex-col my-4 p-4">
        <h3 className="font-bold text-md">About {channel?.username}</h3>
        <span className="font-bold text-sm">{channel?.description}</span>
      </div>
    </div>
  );
};

export default ChannelBody;
