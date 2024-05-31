import { Link } from 'react-router-dom';
import NavbarLogo from '../components/NavbarLogo';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-slate-800 w-full p-4 px-6">
      <div className="flex items-center gap-2">
        <NavbarLogo />
        <h1 className="font-bold text-white text-2xl">Twitch Clone</h1>
      </div>

      <div className="flex gap-4 text-white">
        <Link to={'/'}>Account</Link>
        <Link to={'/'}>Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;
