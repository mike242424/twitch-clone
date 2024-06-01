import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChannelView from './ChannelView';

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
    <div>
      <ChannelView channel={channel} />
    </div>
  );
};

export default Channel;
