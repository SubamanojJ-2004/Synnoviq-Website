import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Game Development",
      description: "From concept to launch, we create engaging gaming experiences",
      price: 415000, // 5000 USD to INR
      features: ["Unity Development", "Unreal Engine", "Mobile Games", "Console Games"]
    },
    {
      title: "AI Solutions",
      description: "Custom AI solutions for your business needs",
      price: 664000, // 8000 USD to INR
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Software Development",
      description: "End-to-end software development services",
      price: 830000, // 10000 USD to INR
      features: ["Web Applications", "Mobile Apps", "Desktop Software", "Cloud Solutions"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-indigo-900/30 rounded-xl overflow-hidden backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-3xl font-bold text-indigo-400">
                  ₹{service.price.toLocaleString('en-IN')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Calculator */}
        <div className="mt-20 bg-black/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Custom Project Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="block">
                <span className="text-gray-300">Project Type</span>
                <select className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white">
                  <option>Game Development</option>
                  <option>AI Solution</option>
                  <option>Software Development</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-300">Project Scale</span>
                <select className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white">
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </label>
            </div>
            <div className="bg-indigo-900/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Estimated Cost</h3>
              <div className="text-4xl font-bold text-indigo-400">₹50,000 - ₹830,000</div>
              <p className="mt-2 text-gray-300">Final price may vary based on specific requirements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;