import { Routes, Route } from 'react-router-dom';
import Channels from './Channels/Channels';
import Channel from './Channels/Channel';
import Settings from './Settings/Settings';

const Content = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Routes>
        <Route path={'/settings'} element={<Settings />} />
        <Route path={'/channels'} element={<Channels />} />
        <Route path={'/channel/:id'} element={<Channel />} />
      </Routes>
    </div>
  );
};

export default Content;
