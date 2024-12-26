import React, { useState } from 'react';
import axios from 'axios';
import { ChevronRight } from 'lucide-react';

const cropTypeOptions = [
  { label: 'Corn', value: 0 },
  { label: 'Rice', value: 1 },
  { label: 'Soybean', value: 2 },
  { label: 'Other', value: 3 },
];

const soilTypeOptions = [
  { label: 'Clay', value: 0 },
  { label: 'Loamy', value: 1 },
  { label: 'Sandy', value: 2 },
  { label: 'Other', value: 3 },
];

function CropMonitoring() {
  const [temperature, setTemperature] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [soilMoisture, setSoilMoisture] = useState('');
  const [cropType, setCropType] = useState('Other');
  const [soilType, setSoilType] = useState('Other');
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/predict', {
        temperature,
        rainfall,
        soil_moisture: soilMoisture,
        crop_type: cropType,
        soil_type: soilType,
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
          <h1 className="text-3xl font-bold text-gray-700">Crop Monitoring</h1>
          <div className="absolute top-0 right-0 flex items-center space-x-2 text-gray-600 text-lg mt-2">
            <h4>Home</h4>
            <ChevronRight />
            <h4>Crop Monitoring</h4>
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
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rainfall">Rainfall</label>
          <input 
            type="text" 
            id="rainfall" 
            value={rainfall} 
            onChange={e => setRainfall(e.target.value)} 
            placeholder="Rainfall" 
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="soilMoisture">Soil Moisture</label>
          <input 
            type="text" 
            id="soilMoisture" 
            value={soilMoisture} 
            onChange={e => setSoilMoisture(e.target.value)} 
            placeholder="Soil Moisture" 
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cropType">Crop Type</label>
          <select
            id="cropType"
            value={cropType}
            onChange={e => setCropType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            {cropTypeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="soilType">Soil Type</label>
          <select
            id="soilType"
            value={soilType}
            onChange={e => setSoilType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            {soilTypeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <button 
          onClick={handleSubmit} 
          className="w-full bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300"
        >
          Check Crop Readiness
        </button>

        {prediction && (
          <div className="mt-6 p-4 bg-lime-100 border border-lime-300 rounded-lg shadow-sm">
            <p className="text-lg font-semibold">Crop Readiness:</p>
            <p className="text-xl">{prediction}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CropMonitoring;
