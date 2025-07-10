import React, { useContext, useEffect } from 'react';
import { AppContent } from '../context/AppContext';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';

const Usage = () => {
  const { userData, backendUrl } = useContext(AppContent);
  const navigate = useNavigate();
  const sendVerificationOtp = async () => {
    console.log('Sending verification OTP');
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + '/api/auth/send-verify-otp');
      console.log(data);
      if (data.success) {
        navigate('/email-verify');
        toast.success(data.message);
      } else {  
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Redirect if logged in and verified
  useEffect(() => {
    if (userData && userData.isAccountVerified) {
      navigate('/working'); // change to your verified user's path
    }
  }, [userData, navigate]);

  return (
    <div>
      <Navbar />

      {!userData ? (
        // Not logged in
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
      ) : !userData.isAccountVerified ? (
        // Logged in but not verified
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
          <h1 className="text-3xl font-bold mb-4">You're Almost There!</h1>
          <p className="text-lg mb-6 text-center max-w-md">
            You're just one step away from using the product. Please verify your email to continue.
          </p>
          <Link
            onClick={sendVerificationOtp}
            to="/verify-email" // link to your email verification page
            className="px-6 py-3 text-lg font-medium text-white bg-purple-700 rounded-lg shadow-md hover:bg-purple-800 transition-all duration-300"
          >
            Verify Email
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Usage;
