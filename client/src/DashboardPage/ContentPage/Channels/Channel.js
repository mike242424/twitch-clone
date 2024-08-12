import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChannelBody from './ChannelBody';
import ChannelChat from './Chat/ChannelChat.js';

import { useGetChannelDetails } from '../../../hooks/useGetChannelDetails';
import NotFound from '../../../components/NotFound.js';

const Channel = () => {
  const { channel, getChannelDetails, error } = useGetChannelDetails();
  const { id } = useParams();

  useEffect(() => {
    getChannelDetails(id);
  }, [id]);

  if (error) {
    return <NotFound />;
  }

  return (
    <div className="flex lg:flex-row flex-col w-full">
      <ChannelBody channel={channel} />
      <ChannelChat channel={channel} />
    </div>
  );
};

export default Channel;
