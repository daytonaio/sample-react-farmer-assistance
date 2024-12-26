import React from 'react';
import { Link } from 'react-router-dom';
import harvest5 from '../assets/harvest5.gif';
import logo from '../assets/logo.png';
import Contact from '../assets/Contact.jpg';
import supplyChain from '../assets/supplyChain.jpg';
import sustainability from '../assets/sustainaibilityImg.jpg';
import organicfarming from '../assets/farm1.jpg';
import CropMonitoring from '../assets/farmer.jpg';



const features = [
  { title: 'Climate Prediction', img: CropMonitoring },
  { title: 'Supply Chain', img: supplyChain },
  { title: 'Crop Monitoring', img: CropMonitoring },
  { title: 'Organic Farming', img: organicfarming },
  { title: 'Sustainability', img: sustainability },
  { title: 'Contact And Advisory', img: Contact },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <img
          alt="cover-gif"
          className="absolute inset-0 w-full h-full object-cover"
          src={harvest5}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 animate-fade-in font-poppins">
            Welcome to Krishi Mitra
          </h1>
          <p className="text-lg lg:text-xl text-white mb-10 text-center px-6 lg:px-8 max-w-3xl font-roboto">
            Empowering farmers with innovative solutions for sustainable agriculture. Discover the future of farming with our comprehensive tools and insights tailored to your needs.
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-16 bg-gray-50" id="about-us">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 flex justify-center">
            <img
              src={logo}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="flex items-center mb-10 justify-center lg:justify-start">
              <div className="flex-grow border-t border-lime-500"></div>
              <h2 className="text-lime-500 text-3xl font-bold mx-4 animate-slide-in-up">About Us</h2>
              <div className="flex-grow border-t border-lime-500"></div>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              At Krishi Mitra, we are dedicated to revolutionizing the agricultural sector through technology and innovation. Our mission is to provide farmers with cutting-edge tools and resources to enhance productivity, sustainability, and overall well-being.
              <br /><br />
              We believe in empowering farmers with the knowledge and technology they need to make informed decisions. Our platform offers a range of services, including climate prediction, crop monitoring, and sustainable farming practices, to support farmers in achieving their goals.
              <br /><br />
              Join us in our mission to transform agriculture for the better. Together, we can build a more sustainable and prosperous future for farming.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-10 py-8" id="our-services">
        <div className="flex items-center w-2/3 lg:w-1/3 mx-auto mb-10 my-4">
          <div className="flex-grow border-t border-lime-500"></div>
          <h2 className="text-lime-500 text-3xl font-bold mx-4 text-center animate-slide-in-up">Our Services</h2>
          <div className="flex-grow border-t border-lime-500"></div>
        </div>
        <br />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-6 lg:px-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg shadow-lg flex flex-col items-center p-6 transition-transform duration-300 hover:transform hover:scale-105 hover:bg-lime-100 hover:shadow-xl"
            >
              <div className="mb-6">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="h-32 w-32 rounded-full object-cover border border-lime-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 animate-slide-in-up">{feature.title}</h3>
              <Link
                className="bg-lime-500 text-white rounded-full px-6 py-2 text-lg font-semibold transition-colors duration-300 hover:bg-lime-600"
                to={`/${feature.title.split(' ').join('')}`}
              >
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
