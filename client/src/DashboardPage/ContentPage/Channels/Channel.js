import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChannelBody from './ChannelBody';
import ChannelChat from './ChannelChat';
import { useGetChannelDetails } from '../../../hooks/useGetChannelDetails';

const Channel = () => {
  const { channel, getChannelDetails } = useGetChannelDetails();
  const { id } = useParams();

  useEffect(() => {
    getChannelDetails(id);
  }, [id]);

  return (
    <div className="flex lg:flex-row flex-col w-full">
      <ChannelBody channel={channel} />
      <ChannelChat />
    </div>
  );
};

export default Channel;
