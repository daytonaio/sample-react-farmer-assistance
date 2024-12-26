import React, { useEffect, useRef } from 'react';
import sustainabilityImg from '../assets/sustainaibilityImg.jpg'; // Update the path as needed
import { ChevronRight } from 'lucide-react';

const benefitsData = [
  { title: 'Environmental Impact', shortDescription: 'Sustainability practices aim to reduce our impact on the environment by minimizing waste, conserving resources, and protecting ecosystems. This includes adopting renewable energy sources, reducing carbon footprints, and promoting sustainable land use.' },
  { title: 'Economic Sustainability', shortDescription: 'Economic sustainability focuses on practices that support long-term economic growth without depleting resources. This involves creating jobs, supporting local economies, and ensuring that resources are used efficiently to promote economic stability.' },
  { title: 'Social Responsibility', shortDescription: 'Sustainability also encompasses social responsibility by promoting fair labor practices, ensuring equitable distribution of resources, and supporting communities. It aims to improve quality of life and create positive social impacts.' },
  { title: 'Innovation and Technology', shortDescription: 'Innovation plays a crucial role in sustainability by developing new technologies and solutions that reduce environmental impact. This includes advancements in energy efficiency, waste management, and sustainable agriculture practices.' },
  { title: 'Education and Awareness', shortDescription: 'Raising awareness and educating the public about sustainability practices is essential for driving change. This involves promoting sustainable habits, sharing information about the benefits of sustainability, and encouraging community involvement.' },
];

const sustainablePracticesData = [
    { title: 'Organic Farming', description: 'Organic farming avoids synthetic chemicals and promotes natural methods like composting and crop rotation to enhance soil health and reduce environmental impact.' },
    { title: 'Agroforestry', description: 'Integrating trees and shrubs into agricultural landscapes enhances biodiversity, improves soil health, and provides additional income sources for farmers.' },
    { title: 'Water Management', description: 'Efficient water use practices, such as drip irrigation and rainwater harvesting, help conserve water resources and ensure sustainable crop production.' },
  ];
  
  const resourceManagementData = [
    { title: 'Soil Health', description: 'Practices like cover cropping and reduced tillage improve soil structure, increase organic matter, and enhance water retention, leading to better crop yields and sustainability.' },
    { title: 'Energy Efficiency', description: 'Implementing energy-efficient technologies and practices on the farm, such as solar-powered systems and energy-saving machinery, reduces energy consumption and costs.' },
    { title: 'Waste Management', description: 'Proper waste management techniques, including composting and recycling farm waste, reduce environmental impact and create valuable resources for soil health.' },
  ];
  
  const Sustainability = () => {
    const elementsRef = useRef([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-slideIn');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
  
      elementsRef.current.forEach(el => {
        if (el) {
          observer.observe(el);
        }
      });
  
      return () => {
        elementsRef.current.forEach(el => {
          if (el) {
            observer.unobserve(el);
          }
        });
      };
    }, []);
  
    return (
        <div>
          <div className="relative w-full mx-auto mb-10 overflow-hidden my-4">
            <img className="h-96 md:h-80 w-full object-cover transition-transform duration-500 hover:scale-110" src={sustainabilityImg} alt="Sustainability" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-black bg-opacity-60 px-10 lg:px-16">
              <div className="text-center">
                <h2 className="font-bold text-4xl lg:text-5xl text-white">Sustainability</h2>
                <div className='flex justify-center space-x-2 text-white text-lg mt-4'>
                  <h4>Home</h4>
                  <ChevronRight />
                  <h4>Our Services</h4>
                  <ChevronRight />
                  <h4>Sustainability</h4>
                </div>
              </div>
            </div>
          </div>
    
          <div className="flex items-center w-2/3 lg:w-1/3 mx-auto mb-10 my-4" ref={el => elementsRef.current[0] = el}>
            <div className="flex-grow border-t border-lime-500"></div>
            <h3 className="text-lime-500 text-3xl font-bold mx-4 text-center transition duration-300 hover:text-lime-400">What is Sustainability</h3>
            <div className="flex-grow border-t border-lime-500"></div>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mx-8 lg:mx-56 text-lg mb-20 text-center my-4" ref={el => elementsRef.current[1] = el}>
            <p>Sustainability in farming involves practices that ensure long-term agricultural productivity while protecting the environment, conserving resources, and supporting local communities. It integrates ecological balance, resource efficiency, and social responsibility into farming practices to benefit both current and future generations.</p>
          </div>
    
          <div className="mb-20 my-4" ref={el => elementsRef.current[2] = el}>
            <div className="flex items-center w-2/3 lg:w-1/3 mx-auto mb-10">
              <div className="flex-grow border-t border-green-300"></div>
              <h3 className="text-lime-500 text-3xl font-bold mx-4 text-center">Benefits</h3>
              <div className="flex-grow border-t border-green-300"></div>
            </div>
            <div className='mt-6 mx-8 lg:mx-56 text-center'>
              {benefitsData.map((benefit, index) => (
                <div key={index} className='mb-6 p-4 rounded-lg shadow-md bg-lime-100 transition duration-300 hover:shadow-lg my-4' ref={el => elementsRef.current[index + 3] = el}>
                  <h3 className='font-semibold text-xl mb-2'>{benefit.title}</h3>
                  <p className='text-md'>{benefit.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>
    
          <div className="mb-20 my-4" ref={el => elementsRef.current[benefitsData.length + 3] = el}>
            <div className="flex items-center w-2/3 lg:w-1/3 mx-auto mb-10">
              <div className="flex-grow border-t border-green-300"></div>
              <h3 className="text-lime-500 text-3xl font-bold mx-4 text-center">Sustainable Practices</h3>
              <div className="flex-grow border-t border-green-300"></div>
            </div>
            <div className='mt-6 mx-8 lg:mx-56 text-center'>
              {sustainablePracticesData.map((practice, index) => (
                <div key={index} className='mb-6 p-4 rounded-lg shadow-md bg-lime-100 transition duration-300 hover:shadow-lg my-4' ref={el => elementsRef.current[index + benefitsData.length + 4] = el}>
                  <h3 className='font-semibold text-xl mb-2'>{practice.title}</h3>
                  <p className='text-md'>{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
    
          <div ref={el => elementsRef.current[benefitsData.length + sustainablePracticesData.length + 4] = el}>
            <div className="flex items-center w-2/3 lg:w-1/3 mx-auto mb-10">
              <div className="flex-grow border-t border-green-300"></div>
              <h3 className="text-lime-500 text-3xl font-bold mx-4 text-center">Resource Management</h3>
              <div className="flex-grow border-t border-green-300"></div>
            </div>
            <div className='mt-6 mx-8 lg:mx-56 text-center'>
              {resourceManagementData.map((resource, index) => (
                <div key={index} className='mb-6 p-4 rounded-lg shadow-md bg-lime-100 transition duration-300 hover:shadow-lg my-4' ref={el => elementsRef.current[index + benefitsData.length + sustainablePracticesData.length + 5] = el}>
                  <h3 className='font-semibold text-xl mb-2'>{resource.title}</h3>
                  <p className='text-md'>{resource.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    
    export default Sustainability;