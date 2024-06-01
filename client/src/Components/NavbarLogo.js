import { Twitch } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavbarLogo = () => {
  return (
    <Link to={'/'}>
      <Twitch className="text-white" />
    </Link>
  );
};

export default NavbarLogo;
