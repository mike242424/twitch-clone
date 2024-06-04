import NavbarLogo from '../components/NavbarLogo';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-slate-800 w-full p-6">
      <div className="flex items-center gap-4">
        <NavbarLogo />
        <h1 className="font-bold text-white text-2xl">Twitch Clone</h1>
      </div>
    </div>
  );
};

export default Navbar;
