import ChannelCard from './ChannelCard';

const ChannelBody = ({ channel }) => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex justify-center items-center w-full bg-slate-200 h-[400px]">
        <span className="font-bold">Channel is offline</span>
      </div>
      <div className="flex flex-col items-start p-4">
        <div className="flex justify-start items-center gap-4 p-4">
          <ChannelCard channel={channel} />
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
