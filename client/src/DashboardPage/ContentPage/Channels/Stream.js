import { ReactFlvPlayer } from 'react-flv-player';

const Stream = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <ReactFlvPlayer
        width="100%"
        height="80%"
        url="http://localhost:8000/live/35dc7f47-ff00-4f9b-a560-b67dfef52122.flv"
      />
    </div>
  );
};

export default Stream;
