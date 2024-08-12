import { NavLink } from 'react-router-dom';
import NavbarLogo from '../Components/NavbarLogo';
import { useUserDetails } from '../hooks/useUserDetails';
import { useGetChannelSettings } from '../hooks/useGetChannelSettings';
import { useEffect } from 'react';
import ChannelAvatar from './ContentPage/Channels/ChannelAvatar';

const Navbar = () => {
  const { isLoggedIn, logout } = useUserDetails();
  const { channelSettings, getChannelSettings } = useGetChannelSettings();

  useEffect(() => {
    getChannelSettings();
  }, []);

  return (
    <div
      className={`flex justify-between items-center bg-slate-800 w-full ${
        channelSettings?.avatarUrl ? 'p-5' : 'p-7'
      }`}
    >
      <div className="flex items-center gap-4">
        <NavbarLogo />
        <NavLink to={'/'} className="font-bold text-white">
          Browse
        </NavLink>
      </div>
      <div className="flex items-center gap-4 text-white">
        {isLoggedIn ? (
          <>
            {channelSettings && (
              <ChannelAvatar
                channel={channelSettings}
                isSmall={true}
                isLink={true}
              />
            )}

            <NavLink className="font-bold" to={'/settings'}>
              Account
            </NavLink>
            <button className="font-bold" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink className="font-bold" to={'/login'}>
              Login
            </NavLink>
            <NavLink className="font-bold" to={'/register'}>
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
