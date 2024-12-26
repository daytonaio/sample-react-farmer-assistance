import React from 'react';
import { Link } from 'react-router-dom';
import supplyChainImg from '../assets/supplyChain.jpg'; // Update the path as needed

const SupplyChain = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <img
          src={supplyChainImg}
          alt="Supply Chain"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 animate-fadeIn">
            Supply Chain Management
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What is Supply Chain Management?</h2>
          <p className="text-lg mb-8">
            Supply chain management involves overseeing and managing the flow of goods and services from production to consumption. It encompasses procurement, logistics, inventory management, and distribution to ensure efficiency and effectiveness in delivering products to consumers.
          </p>
          <Link to="/" className="text-green-800 hover:underline">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default SupplyChain;
