import NavbarLogo from '../Components/NavbarLogo';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-violet-800 w-full p-6">
      <div className="flex items-center gap-4">
        <NavbarLogo />
        <h1 className="font-bold text-white text-2xl">Streem</h1>
      </div>
    </div>
  );
};

export default Navbar;
