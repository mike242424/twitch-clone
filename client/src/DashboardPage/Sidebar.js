import axios from 'axios';
import { useEffect, useState } from 'react';
import ChannelAvatar from './ContentPage/Channels/ChannelAvatar';
import ChannelCard from './ContentPage/Channels/ChannelCard';

const Sidebar = () => {
  const [followedChannels, setFollowedChannels] = useState([]);

  useEffect(() => {
    async function getFollowedChannels() {
      try {
        const userJson = localStorage.getItem('user');
        const user = userJson ? JSON.parse(userJson) : null;
        const token = user ? user.token : null;

        if (!token) {
          console.log('No token found');
          return;
        }

        const response = await axios.get(
          'http://localhost:3002/api/channels/followed',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setFollowedChannels(response.data.followedChannels);
      } catch (err) {
        console.log(err);
      }
    }

    getFollowedChannels();
  }, []);

  return (
    <div
      className={`bg-slate-300 text-slate-800 hidden md:block sm:w-18 xl:w-64 p-2 xl:p-6 ${
        followedChannels.length > 0 ? '' : 'w-20'
      } `}
    >
      <span className="hidden xl:block font-bold">FOLLOWED CHANNELS</span>
      <div className="mt-6">
        {followedChannels?.map((channel) => (
          <div key={channel._id}>
            <div className="xl:hidden">
              <ChannelAvatar avatarUrl={channel.avatarUrl} />
            </div>
            <div className="hidden xl:block">
              <ChannelCard channel={channel} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
