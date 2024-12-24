import React, { useEffect, useRef } from 'react';
import farm1 from '../assets/farm1.jpg';
import { ChevronRight, Mail, Phone } from 'lucide-react';

const benefitsData = [
  { title: 'Environmental Benefits', shortDescription: 'Organic farming offers significant environmental advantages, primarily through reduced chemical use. By prohibiting synthetic pesticides, herbicides, and fertilizers, it minimizes chemical runoff into water bodies and prevents soil contamination. This practice enhances soil health by promoting methods like crop rotation, composting, and green manure, which improve soil fertility and structure while supporting healthy microbial communities. Additionally, organic farming fosters biodiversity by avoiding harmful chemicals and encouraging diverse cropping systems, benefiting beneficial insects, birds, and soil organisms. The emphasis on natural processes also contributes to a lower carbon footprint, as organic farming generally consumes less energy and practices like reduced tillage help sequester carbon in the soil.' },
  { title: 'Economic Benefits', shortDescription: 'Economically, organic farming can be advantageous due to the growing consumer demand for organic products, which often fetch higher prices in the market. This premium pricing can offset the generally higher labor costs associated with organic farming. Moreover, organic farmers save on synthetic inputs, which can be a substantial cost over time, making organic farming a viable economic choice for many.' },
  { title: 'Health Benefits', shortDescription: 'From a health perspective, organic farming reduces the exposure to potentially harmful pesticides and synthetic chemicals, benefiting both consumers and farm workers. This is particularly important for people concerned about the long-term health impacts of chemical residues in food. Some studies also indicate that organic foods may contain higher levels of certain nutrients, such as antioxidants, though this varies depending on the specific crop and farming practices used.' },
  { title: 'Animal Welfare', shortDescription: 'Organic farming often includes stringent standards for animal welfare, providing livestock with better living conditions, such as more space, access to outdoor environments, and organic feed. These practices not only improve the quality of life for the animals but can also lead to better overall animal health and welfare.' },
  { title: 'Climate Resilience', shortDescription: 'In the context of climate change, organic farming contributes to greater resilience by maintaining healthy soils and diverse cropping systems. These practices help farms better withstand extreme weather events and changing climate conditions, making them more sustainable in the long term. This resilience is crucial as global agricultural systems face increasing pressure from environmental changes.' },
];

const councilsData = [
  { name: 'APOF ORGANIC CERTIFICATION AGENCY', address: 'Row House No. A, Veerbhadra Nagar, Baner, Pune', phoneNumber: '8806230301', email: 'info@aoca.in', headPerson: 'Mr. Nirmal D', state: 'Pune' },
  { name: 'ADITI ORGANIC CERTIFICATION PVT. LTD.', address: 'No. 38, 1st floor, 20th Main Road, Rajajinagar, Bengaluru, Karnataka', phoneNumber: '7619102658', email: 'kavya@aditicert.net', headPerson: 'Kavya HP', state: 'Karnataka' },
  { name: 'BIOFARMS NATURAL', address: 'Near Tibetan Colony, Clement Town, Dehradun, Uttarakhand', phoneNumber: '8806230301', email: 'biofarmnatural2017@gmail.com', headPerson: 'J.C. Mathew', state: 'Uttarakhand' },
  { name: 'AGRICERT PVT. LTD.', address: 'Ground Floor, Cooperative Building, Pulwama, Srinagar, Jammu Kashmir', phoneNumber: '8806230301', email: 'agricertjk@gmail.com', headPerson: 'Umar Yasin Mir', state: 'Jammu Kashmir' },
];

const OrganicFarming = () => {
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
      <div className="relative w-full mx-auto mb-10 overflow-hidden">
        <img className="h-96 md:h-80 w-full object-cover transition-transform duration-500 hover:scale-110" src={farm1} alt="Organic Farming" />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-black bg-opacity-60 px-10 lg:px-16">
          <div className="text-center">
            <h2 className="font-bold text-4xl lg:text-5xl text-white">Organic Farming</h2>
            <div className='flex justify-center space-x-2 text-white text-lg mt-4'>
              <h4>Home</h4>
              <ChevronRight />
              <h4>Our Services</h4>
              <ChevronRight />
              <h4>Organic Farming</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center w-2/3 lg:w-1/3 mx-auto mb-10" ref={el => elementsRef.current[0] = el}>
        <div className="flex-grow border-t border-lime-500"></div>
        <h3 className="text-lime-500 text-3xl font-bold mx-4 text-center transition duration-300 hover:text-lime-400">What is Organic Farming</h3>
        <div className="flex-grow border-t border-lime-500"></div>
      </div>
      
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mx-8 lg:mx-56 text-lg mb-20 text-center" ref={el => elementsRef.current[1] = el}>
        <p>Organic Farming is an agricultural process that uses biological fertilizers and pest controls derived from plant or animal waste. It aims to grow crops in a way that is natural and healthy for the environment and all living things.</p>
        <p>It includes avoiding synthetic chemicals like pesticides and fertilizers, using organic inputs like green manures and compost. Composting is a widely used method in organic farming.</p>
      </div>

      <div className="mb-20" ref={el => elementsRef.current[2] = el}>
        <div className="flex items-center w-2/3 lg:w-1/3 mx-auto mb-10">
          <div className="flex-grow border-t border-green-300"></div>
          <h3 className="text-lime-500 text-3xl font-bold mx-4 text-center">Benefits</h3>
          <div className="flex-grow border-t border-green-300"></div>
        </div>
        <div className='mt-6 mx-8 lg:mx-56 text-center'>
          {benefitsData.map((benefit, index) => (
            <div key={index} className='mb-6 p-4 rounded-lg shadow-md bg-lime-100 transition duration-300 hover:shadow-lg' ref={el => elementsRef.current[index + 3] = el}>
              <h3 className='font-semibold text-xl mb-2'>{benefit.title}</h3>
              <p className='text-md'>{benefit.shortDescription}</p>
            </div>
          ))}
        </div>
      </div>

      <div ref={el => elementsRef.current[benefitsData.length + 3] = el}>
        <div className="flex items-center w-2/3 lg:w-1/3 mx-auto mb-10">
          <div className="flex-grow border-t border-lime-500"></div>
          <h3 className="text-lime-500 text-3xl font-bold mx-4 text-center">Regional Councils</h3>
          <div className="flex-grow border-t border-lime-500"></div>
        </div>
        <div className='mx-8 lg:mx-56'>
          {councilsData.map((council, index) => (
            <div key={index} className='bg-gray-300 my-4 py-6 px-4 rounded-lg transition duration-300 hover:bg-gray-200' ref={el => elementsRef.current[index + benefitsData.length + 4] = el}>
              <h2 className='text-xl text-center font-bold mb-4'>{council.name}</h2>
              <div className='flex flex-col lg:flex-row lg:justify-around'>
                <div className='lg:w-1/3 mb-4 lg:mb-0'>
                  <h4 className='font-semibold'>Address</h4>
                  <p className='mt-2'>{council.address}</p>
                </div>
                <div className='lg:w-1/3 mb-4 lg:mb-0'>
                  <h4 className='font-semibold'>Head Person</h4>
                  <p className='mt-2'>{council.headPerson}</p>
                </div>
                <div className='lg:w-1/3'>
                  <h4 className='font-semibold'>Contact Details</h4>
                  <div className='flex items-center mt-2'>
                    <Phone className='mr-2' />
                    <a href={`tel:${council.phoneNumber}`}>{council.phoneNumber}</a>
                  </div>
                  <div className='flex items-center mt-2'>
                    <Mail className='mr-2' />
                    <a href={`mailto:${council.email}`}>{council.email}</a>
                  </div>
                </div>
              </div>    
            </div>    
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrganicFarming;