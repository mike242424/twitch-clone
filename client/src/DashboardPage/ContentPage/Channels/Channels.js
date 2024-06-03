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
    <>
      <h1 className="text-center font-bold text-3xl text-slate-800 my-8">
        All Channels
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 gap-4 w-full px-10">
        {channels?.map((channel) => (
          <div
            key={channel._id}
            className="flex flex-col pb-8 hover:bg-slate-400 rounded-lg p-2"
          >
            <div className="bg-slate-300 w-full h-48 rounded-lg flex justify-center items-center">
              <span className=" text-white">Currently Offline</span>
            </div>
            <ChannelCard channel={channel} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Channels;
