import axios from 'axios';
import { useEffect, useState } from 'react';

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
  });

  return (
    <div className="bg-slate-300 text-slate-800 w-14 lg:w-64 p-2 lg:p-6">
      <span className="hidden lg:block font-bold">FOLLOWED CHANNELS</span>
      <ul className="mt-4">
        {followedChannels?.map((channel) => (
          <li className="flex flex-col my-4" key={channel._id}>
            <span className="font-bold">{channel.title}</span>
            <span className="text-xs text-red-700 font-bold">Offline</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
