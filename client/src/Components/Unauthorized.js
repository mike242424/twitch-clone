import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center text-violet-800">
        <h1 className="text-center font-bold text-3xl text-violet-800 my-8">
          Unauthorized
        </h1>
        <p className="font-bold text-xl">
          You must be logged in to view this page. Login{' '}
          <Link className="text-violet-500 hover:underline" to="/login">
            here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Unauthorized;
