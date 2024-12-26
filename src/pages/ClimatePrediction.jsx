import React, { useState } from 'react';
import axios from 'axios';
import { ChevronRight } from 'lucide-react';

const climateTypeOptions = [
  { label: 'Tropical', value: 0 },
  { label: 'Arid', value: 1 },
  { label: 'Temperate', value: 2 },
  { label: 'Other', value: 3 },
];

const humidityOptions = [
  { label: 'Low', value: 0 },
  { label: 'Medium', value: 1 },
  { label: 'High', value: 2 },
  { label: 'Other', value: 3 },
];

function ClimatePrediction() {
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [precipitation, setPrecipitation] = useState('');
  const [climateType, setClimateType] = useState('Other');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/climate-predict', {
        temperature,
        humidity,
        precipitation,
        climate_type: climateType,
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg p-8 mb-10">
        <div className="relative mb-6">
          <h1 className="text-3xl font-bold text-gray-700">Climate Prediction</h1>
          <div className="absolute top-0 right-0 flex items-center space-x-2 text-gray-600 text-lg mt-2">
            <h4>Home</h4>
            <ChevronRight />
            <h4>Climate Prediction</h4>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="temperature">Temperature</label>
          <input 
            type="text" 
            id="temperature" 
            value={temperature} 
            onChange={e => setTemperature(e.target.value)} 
            placeholder="Temperature" 
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="humidity">Humidity</label>
          <input 
            type="text" 
            id="humidity" 
            value={humidity} 
            onChange={e => setHumidity(e.target.value)} 
            placeholder="Humidity" 
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precipitation">Precipitation</label>
          <input 
            type="text" 
            id="precipitation" 
            value={precipitation} 
            onChange={e => setPrecipitation(e.target.value)} 
            placeholder="Precipitation" 
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="climateType">Climate Type</label>
          <select
            id="climateType"
            value={climateType}
            onChange={e => setClimateType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {climateTypeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button 
          onClick={handleSubmit} 
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300"
        >
          Get Climate Prediction
        </button>

        {prediction && (
          <div className="mt-6 p-4 bg-teal-100 border border-teal-300 rounded-lg shadow-sm">
            <p className="text-lg font-semibold">Predicted Climate:</p>
            <p className="text-xl">{prediction}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClimatePrediction;
