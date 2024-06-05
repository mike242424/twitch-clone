import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChannelBody from './ChannelBody';
import ChannelChat from './ChannelChat';
import NotFound from '../../../components/NotFound.js';
import { useGetChannelDetails } from '../../../hooks/useGetChannelDetails';

const Channel = () => {
  const { channel, getChannelDetails, error } = useGetChannelDetails();
  const { id } = useParams();
  console.log(channel);

  useEffect(() => {
    getChannelDetails(id);
  }, [id]);

  if (error) {
    return <NotFound />;
  }

  return (
    <div className="flex lg:flex-row flex-col w-full">
      <ChannelBody channel={channel} />
      <ChannelChat />
    </div>
  );
};

export default Channel;
