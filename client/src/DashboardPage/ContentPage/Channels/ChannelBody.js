import { useEffect, useState } from 'react';
import ChannelCard from './ChannelCard';
import axios from 'axios';
import { useUserDetails } from '../../../hooks/useUserDetails';

const ChannelBody = ({ channel }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const { token, username } = useUserDetails();

  useEffect(() => {
    async function getIsFollowing() {
      if (!token) {
        console.log('Access Denied. No token found.');
        return;
      }

      try {
        const response = await axios.get(
          'http://localhost:3002/api/channels/followed',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        const followedChannelIds = response.data.followedChannels.map(
          (channel) => channel._id,
        );
        const isCurrentlyFollowing = followedChannelIds.includes(channel?._id);

        setIsFollowing(isCurrentlyFollowing);
      } catch (err) {
        console.log(err);
      }
    }

    getIsFollowing();
  }, [channel?._id]);

  async function handleToggleFollow() {
    if (!token) {
      console.log('No token found');
      return;
    }

    try {
      if (!isFollowing) {
        await axios.post(
          'http://localhost:3002/api/channels/follow',
          { channelId: channel?._id },
          { headers: { Authorization: `Bearer ${token}` } },
        );
      } else {
        await axios.delete('http://localhost:3002/api/channels/follow', {
          headers: { Authorization: `Bearer ${token}` },
          data: { channelId: channel?._id },
        });
      }
      window.location.reload();
      setIsFollowing(!isFollowing);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex justify-center items-center w-full bg-slate-200 h-[400px]">
        <span className="font-bold">Channel is offline</span>
      </div>
      <div className="flex flex-col items-start p-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-start items-center gap-4 p-4">
            <ChannelCard channel={channel} />
          </div>
          {username !== channel?.username && token && (
            <div className="p-4">
              <button
                className={`${
                  isFollowing ? 'bg-slate-400' : 'bg-slate-800'
                } p-4 rounded-lg text-white font-bold`}
                onClick={handleToggleFollow}
              >
                {isFollowing ? 'Unfollow' : 'Follow'}
              </button>
            </div>
          )}
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
