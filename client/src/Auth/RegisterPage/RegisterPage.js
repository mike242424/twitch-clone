import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';

const RegisterPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-20">
      <div className="border-2 border-slate-500 w-6/12 p-10 px-20 text-center">
        <RegisterForm />
        <Link className="text-slate-500" to="http://localhost:3000/login">
          Already have an account?
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
