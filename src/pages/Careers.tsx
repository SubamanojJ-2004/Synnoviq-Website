import React from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
  const positions = [
    {
      title: "Senior Game Developer",
      department: "Game Development",
      location: "Remote / On-site",
      description: "Looking for an experienced game developer with Unity/Unreal expertise"
    },
    {
      title: "AI Engineer",
      department: "AI Solutions",
      location: "Remote",
      description: "Join our AI team to build next-generation machine learning solutions"
    },
    {
      title: "Full Stack Developer",
      department: "Software Development",
      location: "Hybrid",
      description: "Create robust web applications using modern technologies"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">Join Our Team</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-indigo-900/30 p-4 rounded-lg backdrop-blur-sm"
              >
                <h3 className="font-bold mb-2">Innovation First</h3>
                <p className="text-gray-300">Work on cutting-edge projects using the latest technologies</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-indigo-900/30 p-4 rounded-lg backdrop-blur-sm"
              >
                <h3 className="font-bold mb-2">Growth Opportunities</h3>
                <p className="text-gray-300">Continuous learning and career development programs</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-indigo-900/30 p-4 rounded-lg backdrop-blur-sm"
              >
                <h3 className="font-bold mb-2">Work-Life Balance</h3>
                <p className="text-gray-300">Flexible hours and remote work options</p>
              </motion.div>
            </div>
          </div>
          <div className="relative h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
              alt="Team collaboration"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
        <div className="space-y-6">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-indigo-900/30 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{position.title}</h3>
                  <p className="text-gray-300">{position.department}</p>
                </div>
                <span className="bg-indigo-600 px-3 py-1 rounded-full text-sm">
                  {position.location}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{position.description}</p>
              <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;