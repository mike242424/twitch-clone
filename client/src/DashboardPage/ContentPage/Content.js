import { Routes, Route } from 'react-router-dom';
import Channels from './Channels';
import Channel from './Channel';
import Settings from './Settings';

const Content = () => {
  return (
    <div className="flex flex-1 p-4">
      <Routes>
        <Route path={'/settings'} element={<Settings />} />
        <Route path={'/channels'} element={<Channels />} />
        <Route path={'/channel/:id'} element={<Channel />} />
      </Routes>
    </div>
  );
};

export default Content;
