import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import Loading from '../../components/LoadingSpinner';
import { useLogin } from '../../hooks/useLogin';
import Navbar from '../Navbar';

const LoginPage = () => {
  const { isLoading } = useLogin();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <Navbar />
        <div className="bg-slate-500 border-2 border-slate-600 w-10/12 sm:w-6/12 p-10 px-20 mt-10 text-center">
          <LoginForm />
          <span className="text-white">
            Don't have an account?{' '}
            <Link
              className="text-slate-800 hover:text-slate-700 font-bold"
              to="http://localhost:3000/register"
            >
              Register
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
