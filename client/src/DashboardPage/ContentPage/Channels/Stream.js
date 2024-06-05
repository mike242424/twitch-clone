import { ReactFlvPlayer } from 'react-flv-player';

const Stream = ({ channel }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <ReactFlvPlayer width="100%" height="80%" url={channel?.streamUrl} />
    </div>
  );
};

export default Stream;
