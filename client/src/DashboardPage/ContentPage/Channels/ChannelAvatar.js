import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChannelAvatar = ({ channel, isLink, isSmall }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsError(true);
    setIsLoading(false);
  };

  const avatarContent =
    channel?.avatarUrl === 'none' || isError ? (
      <div
        className={`${
          isSmall ? 'h-10 w-10' : 'h-16 w-16'
        } bg-violet-500 rounded-full`}
      ></div>
    ) : (
      <>
        {isLoading && (
          <div
            className={`${
              isSmall ? 'h-10 w-10' : 'h-16 w-16'
            } bg-gray-200 rounded-full animate-pulse`}
          ></div>
        )}
        <img
          src={channel?.avatarUrl}
          alt="user Avatar"
          className={`${isSmall ? 'h-10 w-10' : 'h-16 w-16'} rounded-full ${
            isLoading ? 'hidden' : 'block'
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </>
    );

  if (isLink) {
    return <Link to={`/channel/${channel?._id}`}>{avatarContent}</Link>;
  } else {
    return avatarContent;
  }
};

export default ChannelAvatar;
