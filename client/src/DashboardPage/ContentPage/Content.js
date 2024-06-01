import { Routes, Route } from 'react-router-dom';
import Channels from './Channels/Channels';
import Settings from './Settings';
import Channel from './Channels/Channel';

const Content = () => {
  return (
    <div className="flex flex-1">
      <Routes>
        <Route path={'/settings'} element={<Settings />} />
        <Route path={'/channels'} element={<Channels />} />
        <Route path={'/channel/:id'} element={<Channel />} />
      </Routes>
    </div>
  );
};

export default Content;
