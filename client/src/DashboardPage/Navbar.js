import { Link } from 'react-router-dom';
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
  }

  return (
    <div className="flex justify-between items-center bg-slate-800 w-full p-5 px-6">
      <div className="flex items-center gap-4">
        <NavbarLogo />
        <button className="font-bold text-white">Browse</button>
      </div>

      <div className="flex gap-4 text-white">
        {isAuthenticated ? (
          <>
            <Link className="font-bold" to={'/'}>
              Account
            </Link>
            <button className="font-bold" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="font-bold" to={'/login'}>
              Login
            </Link>
            <Link className="font-bold" to={'/register'}>
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
