import React from 'react';
import ReactPlayer from 'react-player';

const Stream = ({ channel, isControls, isPlaying }) => {
  return (
    <div className="relative w-full h-0 pb-[56.25%]">
      <ReactPlayer
        url={channel?.streamUrl}
        playing={isPlaying}
        controls={isControls}
        width="100%"
        height="100%"
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default Stream;
