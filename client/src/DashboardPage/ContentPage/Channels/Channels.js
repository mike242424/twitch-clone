import { useState, useEffect } from 'react';
import axios from 'axios';
import ChannelCard from './ChannelCard';

const Channels = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    async function getChannels() {
      try {
        const response = await axios.get('http://localhost:3002/api/channels/');

        setChannels(response.data.channels);
      } catch (err) {
        console.log(err);
      }
    }

    getChannels();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 justify-around gap-4 w-full">
      {channels?.map((channel) => (
        <ChannelCard key={channel._id} channel={channel} />
      ))}
    </div>
  );
};

export default Channels;
