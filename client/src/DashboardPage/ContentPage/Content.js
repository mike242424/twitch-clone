import { Routes, Route } from 'react-router-dom';
import Channels from './Channels/Channels';
import Channel from './Channels/Channel';
import Settings from './Settings/Settings';
import NotFound from '../../components/NotFound';

const Content = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Routes>
        <Route path="/" element={<Channels />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Content;
