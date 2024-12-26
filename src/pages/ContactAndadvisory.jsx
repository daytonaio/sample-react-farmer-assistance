import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../assets/Contact.jpg';

const ContactAndAdvisory = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    let errors = { name: '', email: '', message: '' };

    if (!formData.name) {
      errors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
      valid = false;
    }

    if (!formData.message) {
      errors.message = 'Message is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here
      setSubmitted(true);
      // Reset form data if needed
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <img
          src={Contact}
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 animate-fadeIn">
            Contact & Advisory
          </h1>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="py-16 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-8">
            We are here to assist you with any inquiries or support you need. Contact us through the following channels:
          </p>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Toll-Free Numbers</h3>
              <p className="text-lg mb-4">For immediate assistance, you can reach out to us via our toll-free numbers:</p>
              <ul className="list-disc list-inside text-lg">
                <li>1800-123-4567</li>
                <li>1800-234-5678</li>
                <li>1800-345-6789</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Email Us</h3>
              <p className="text-lg mb-4">For detailed inquiries, please email us at:</p>
              <p className="text-lg font-medium">support@krishimitra.com</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            {submitted ? (
              <p className="text-lg mb-8">Thank you for reaching out! We will get back to you soon.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
                <div>
                  <label htmlFor="name" className="block text-lg mb-2 font-semibold">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.name ? 'border-red-500' : ''}`}
                    aria-describedby="name-error"
                    required
                  />
                  {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg mb-2 font-semibold">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.email ? 'border-red-500' : ''}`}
                    aria-describedby="email-error"
                    required
                  />
                  {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg mb-2 font-semibold">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.message ? 'border-red-500' : ''}`}
                    rows="4"
                    aria-describedby="message-error"
                    required
                  ></textarea>
                  {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Back to Home Link */}
      <div className="py-8 text-center">
        <Link to="/" className="text-green-800 hover:underline">Back to Home</Link>
      </div>
    </div>
  );
};

export default ContactAndAdvisory;
