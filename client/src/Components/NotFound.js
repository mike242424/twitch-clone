import { Link } from 'react-router-dom';
import Navbar from '../Auth/Navbar';

const NotFound = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex flex-col justify-center items-center text-slate-800">
        <h1 className="text-center font-bold text-3xl text-slate-800 my-8">
          404 Page Not Found
        </h1>
        <p className="font-bold text-xl">
          This page does not exists. Return to{' '}
          <Link className="text-slate-500 hover:underline" to={'/'}>
            Twitch Clone?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
