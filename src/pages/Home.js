// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Welcome to Our Website
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            This is the home page of our React Router demonstration. Navigate 
            through our pages using the menu above to explore different sections 
            of our site.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Quick Links
            </h2>
            <div className="space-y-2">
              <Link 
                to="/about" 
                className="block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              >
                Learn About Us
              </Link>
              <Link 
                to="/contact" 
                className="block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-blue-500 text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Fast Performance
              </h3>
              <p className="text-gray-600">
                Built with React Router for lightning-fast navigation 
                without page reloads.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-green-500 text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Responsive Design
              </h3>
              <p className="text-gray-600">
                Optimized for all devices with modern, clean design 
                principles.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-purple-500 text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Modern Tech
              </h3>
              <p className="text-gray-600">
                Using the latest React and routing technologies for 
                optimal user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
