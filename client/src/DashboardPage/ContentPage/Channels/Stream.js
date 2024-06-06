import React from 'react';
import ReactPlayer from 'react-player';

const Stream = ({ channel, isControls, isPlaying }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <ReactPlayer
        url={channel?.streamUrl}
        playing={isPlaying}
        controls={isControls}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Stream;
