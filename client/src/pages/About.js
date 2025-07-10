import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl">
          <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">About Our Project</h2>
          
          <p className="text-lg text-gray-600 mb-4 leading-relaxed text-center">
            Welcome to our <span className="text-indigo-600 font-semibold">IPL Win Predictor</span>! 
            This application uses <span className="text-purple-600 font-semibold">Machine Learning</span> to forecast the outcome of IPL matches based on key match data.
          </p>
          
          <p className="text-lg text-gray-600 mb-4 leading-relaxed text-center">
            We’ve built a robust ML pipeline using <span className="font-semibold text-pink-600">Logistic Regression</span> to process historical IPL data and generate accurate win probabilities.
            Our model uses a combination of features like current score, target, overs remaining, wickets lost, and match location to make predictions in real time.
          </p>
          
          <p className="text-lg text-gray-600 mb-4 leading-relaxed text-center">
            The backend ML model is served using a <span className="text-indigo-600 font-semibold">Flask API</span> for fast and efficient predictions.
            Meanwhile, all other server-side logic including authentication and user management is handled using <span className="text-purple-600 font-semibold">Node.js</span> and <span className="text-pink-600 font-semibold">Express</span>.
            This separation allows us to maintain a clean and scalable architecture.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed text-center">
            The frontend is built with <span className="text-pink-600 font-semibold">React</span> and enhanced using <span className="text-indigo-600 font-semibold">Tailwind CSS</span> and <span className="text-purple-600 font-semibold">Framer Motion</span> for beautiful, smooth user interactions.
            Whether you're a fan or a data enthusiast, our app offers an exciting way to explore IPL match dynamics.
          </p>
          
          <div className="mt-8 flex justify-center">
            <button
              className="py-3 px-8 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
              onClick={() => window.location.href = '/usage'}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
