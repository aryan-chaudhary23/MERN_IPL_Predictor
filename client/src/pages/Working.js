import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { AppContent } from '../context/AppContext';
import { useNavigate, Link } from 'react-router-dom';
import IPLPredictor from './IPLPredictor';

const Working = () => {
  const { userData } = useContext(AppContent);
  const navigate = useNavigate();

  // Not logged in
  if (!userData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p className="mb-6 text-lg">Please log in to access this page.</p>
        <button
          onClick={() => navigate('/login')}
          className="px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 ease-in-out"
        >
          Go to Login
        </button>
      </div>
    );
  }

  // Logged in but not verified
  if (!userData.isAccountVerified) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
        <h1 className="text-2xl font-bold mb-4">No Access</h1>
        <p className="mb-6 text-lg text-center max-w-md">
          Your email is not verified yet. Please verify your email to access this page.
        </p>
        <Link
          to="/verify-email" // adjust route to your actual email verification page
          className="px-6 py-3 text-lg font-medium text-white bg-purple-700 rounded-lg shadow-md hover:bg-purple-800 transition-all duration-300"
        >
          Verify Email
        </Link>
      </div>
    );
  }

  // Logged in and verified
  return (
    <div>
        <Navbar/>
      <IPLPredictor/>
    </div>
  );
};

export default Working;
