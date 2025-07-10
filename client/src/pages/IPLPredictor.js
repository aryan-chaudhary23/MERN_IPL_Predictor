import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function App() {
  const [data, setData] = useState({
    batting_team: [],
    bowling_team: [],
    city: []
  });

  const [formData, setFormData] = useState({
    batting_team: "",
    bowling_team: "",
    city: "",
    total_runs_x: "",
    score:"",
    wickets: "",
    overs: ""
  });
  const backendUrl = "http://localhost:5000"; // Use the environment variable or fallback to localhost
  const [predictedResult, setPredictedResult] = useState(null); // State to hold the predicted result
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Fetch teams and city data from an API (assuming an API exists)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/get_teams_and_city`, {
  withCredentials: true,
});
        console.log(response)
        setData({
          batting_team: response.data.batting_team,
          bowling_team: response.data.bowling_team,
          city: response.data.city
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/predict`, formData,{
        withCredentials: true,
      });
      setPredictedResult({
        batting_team_probability: response.data.batting_team_probability,
        bowling_team_probability: response.data.bowling_team_probability,
      });
      console.log(predictedResult)
      setIsModalOpen(true); // Open modal with result
    } catch (error) {
      console.error("Error during prediction:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-9">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-lg bg-white p-8 rounded-3xl shadow-2xl space-y-6"
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-extrabold text-center text-indigo-600"
        >
          IPL Win Predictor
        </motion.h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4"
          >
            <label htmlFor="batting_team" className="block text-lg font-medium text-gray-700">Batting Team:</label>
            <select
              id="batting_team"
              name="batting_team"
              value={formData.batting_team}
              onChange={handleChange}
              className="mt-1 block w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Batting Team</option>
              {data.batting_team.map((team, index) => (
                <option key={index} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-4"
          >
            <label htmlFor="bowling_team" className="block text-lg font-medium text-gray-700">Bowling Team:</label>
            <select
              id="bowling_team"
              name="bowling_team"
              value={formData.bowling_team}
              onChange={handleChange}
              className="mt-1 block w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Bowling Team</option>
              {data.bowling_team.map((team, index) => (
                <option key={index} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mb-4"
          >
            <label htmlFor="city" className="block text-lg font-medium text-gray-700">City:</label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select City</option>
              {data.city.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mb-4"
          >
            <label htmlFor="total_runs_x" className="block text-lg font-medium text-gray-700">Target:</label>
            <input
              type="number"
              id="total_runs_x"
              name="total_runs_x"
              value={formData.total_runs_x}
              onChange={handleChange}
              className="mt-1 block w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mb-4"
          >
            <label htmlFor="score" className="block text-lg font-medium text-gray-700">Runs made:</label>
            <input
              type="number"
              id="score"
              name="score"
              value={formData.score}
              onChange={handleChange}
              className="mt-1 block w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mb-4"
          >
            <label htmlFor="wickets" className="block text-lg font-medium text-gray-700">Wickets Fallen:</label>
            <input
              type="number"
              id="wickets"
              name="wickets"
              value={formData.wickets}
              onChange={handleChange}
              className="mt-1 block w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="mb-6"
          >
            <label htmlFor="overs" className="block text-lg font-medium text-gray-700">Overs Lapsed:</label>
            <input
              type="number"
              id="overs"
              name="overs"
              value={formData.overs}
              onChange={handleChange}
              className="mt-1 block w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Predict
          </motion.button>
        </form>
      </motion.div>

      {/* Modal to show predicted price */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-xl space-y-4 w-96"
          >
            <h2 className="text-2xl font-bold text-center text-indigo-600">
              Prediction Result
            </h2>
            {predictedResult && (
              <>
                <p className="text-center text-lg font-semibold">
                  Probability of{" "}
                  <span className="text-indigo-600">{formData.batting_team}</span>{" "}
                  winning:{" "}
                  <span className="font-bold">
                    {predictedResult.batting_team_probability}%
                  </span>
                </p>
                <p className="text-center text-lg font-semibold">
                  Probability of{" "}
                  <span className="text-indigo-600">{formData.bowling_team}</span>{" "}
                  winning:{" "}
                  <span className="font-bold">
                    {predictedResult.bowling_team_probability}%
                  </span>
                </p>
              </>
            )}
            <div className="flex justify-center">
              <button
                onClick={closeModal}
                className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
