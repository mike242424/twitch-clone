import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-20">
      <div className="border-2 border-slate-500 w-6/12 p-10 px-20 text-center">
        <LoginForm />
        <Link className="text-slate-500" to="http://localhost:3000/register">
          Create new account?
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
