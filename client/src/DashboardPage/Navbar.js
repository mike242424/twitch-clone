import { NavLink } from 'react-router-dom';
import NavbarLogo from '../components/NavbarLogo';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const userDetails = user ? JSON.parse(user) : null;
    setIsAuthenticated(!!userDetails && !!userDetails.token);
  }, []);

  function handleLogout() {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    window.location.reload();
  }

  return (
    <div className="flex justify-between items-center bg-slate-800 w-full p-5 px-6">
      <div className="flex items-center gap-4">
        <NavbarLogo />
        <NavLink to={'/channels'} className="font-bold text-white">
          Browse
        </NavLink>
      </div>

      <div className="flex gap-4 text-white">
        {isAuthenticated ? (
          <>
            <NavLink className="font-bold" to={'/settings'}>
              Account
            </NavLink>
            <button className="font-bold" onClick={handleLogout}>
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
