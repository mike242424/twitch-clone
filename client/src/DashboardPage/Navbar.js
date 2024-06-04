import { NavLink } from 'react-router-dom';
import NavbarLogo from '../components/NavbarLogo';
import { useUserDetails } from '../hooks/useUserDetails';

const Navbar = () => {
  const { username, isLoggedIn, logout } = useUserDetails();

  return (
    <div className="flex justify-between items-center bg-slate-800 w-full p-5 px-6">
      <div className="flex items-center gap-4">
        <NavbarLogo />
        <NavLink to={'/'} className="font-bold text-white">
          Browse
        </NavLink>
      </div>

      <div className="flex gap-4 text-white">
        {isLoggedIn ? (
          <>
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
