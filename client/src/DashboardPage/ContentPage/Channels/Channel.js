import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChannelBody from './ChannelBody';
import ChannelChat from './ChannelChat';

const Channel = () => {
  const [channel, setChannel] = useState();
  const { id } = useParams();

  useEffect(() => {
    try {
      async function getChannel() {
        const response = await axios.get(
          `http://localhost:3002/api/channels/${id}`,
        );

        setChannel(response.data.channelDetails);
      }

      getChannel();
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  return (
    <div className="flex w-full">
      <ChannelBody channel={channel} />
      <ChannelChat />
    </div>
  );
};

export default Channel;
