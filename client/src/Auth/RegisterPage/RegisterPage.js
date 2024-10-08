import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import Loading from '../../Components/LoadingSpinner';
import { useRegister } from '../../hooks/useRegister';
import Navbar from '../Navbar';

const RegisterPage = () => {
  const { isLoading } = useRegister();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Navbar />
      <div className="bg-violet-500 border-2 border-violet-600 w-10/12 sm:w-6/12 p-10 px-20 mt-10 text-center">
        <RegisterForm />
        <span className="text-white">
          Already have an account?{' '}
          <Link
            className="text-violet-900 hover:text-violet-800 font-bold"
            to="http://localhost:3000/login"
          >
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterPage;
