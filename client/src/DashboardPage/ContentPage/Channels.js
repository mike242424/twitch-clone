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
        console.log(response.data.channels);
      } catch (err) {
        console.log(err);
      }
    }

    getChannels();
  }, []);
  return (
    <div className="flex justify-around gap-4 w-full">
      {channels?.map((channel) => (
        <ChannelCard key={channel.id} channel={channel} />
      ))}
    </div>
  );
};

export default Channels;
