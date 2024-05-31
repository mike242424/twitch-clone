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
    <div className="flex justify-between items-center bg-slate-800 w-full p-4 px-6">
      <div className="flex items-center gap-2">
        <NavbarLogo />
        <h1 className="font-bold text-white text-2xl">Twitch Clone</h1>
      </div>

      <div className="flex gap-4 text-white">
        {isAuthenticated ? (
          <>
            <Link to={'/'}>Account</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
