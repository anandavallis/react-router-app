// pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in tech industry.'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Technical expert specializing in modern web technologies.'
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      description: 'Full-stack developer passionate about clean code.'
    }
  ];

  const companyValues = [
    {
      icon: '🎯',
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication.'
    },
    {
      icon: '🎨',
      title: 'Quality',
      description: 'We deliver exceptional products with attention to detail.'
    },
    {
      icon: '🌱',
      title: 'Growth',
      description: 'We foster continuous learning and personal development.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            About Us
          </h1>
          
          {/* Company Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 mb-4">
                  We are dedicated to creating innovative solutions that make a 
                  difference in people's lives. Our team is passionate about 
                  technology and committed to excellence in everything we do.
                </p>
                <p className="text-gray-600">
                  Through continuous learning and adaptation, we strive to stay at 
                  the forefront of technological advancement while maintaining our 
                  core values of integrity and customer satisfaction.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2020, we started as a small team with big dreams. 
                  What began as a passion project has grown into a thriving 
                  company serving clients worldwide.
                </p>
                <p className="text-gray-600">
                  Today, we continue to innovate and expand our services while 
                  staying true to our original vision of making technology 
                  accessible and beneficial for everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear about your project and discuss how we can help.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600 transition duration-200 font-medium"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
