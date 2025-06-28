import React from 'react';
import { useNavigate } from 'react-router';
import Lottie from 'lottie-react';
import errorAnimation from '../../assets/error2.json';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-80 h-80">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
      <h1 className="text-4xl font-bold mt-4 text-gray-800">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">Sorry, the page you're looking for doesn't exist.</p>

      <button
        onClick={() => navigate('/')}
        className="mt-6 px-6 py-3 cursor-pointer bg-blue-600 text-white rounded-lg
                   transition-transform duration-300 ease-in-out
                   hover:scale-105 hover:bg-blue-700 shadow-md"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Error;
