import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Users, Briefcase, FileText, Phone, Building2, NewspaperIcon } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { path: '/', icon: <Home size={20} />, label: 'Home' },
    { path: '/about', icon: <Users size={20} />, label: 'About Us' },
    { path: '/services', icon: <Briefcase size={20} />, label: 'Services' },
    { path: '/projects', icon: <FileText size={20} />, label: 'Our Projects' },
    { path: '/careers', icon: <Building2 size={20} />, label: 'Careers' },
    { path: '/blog', icon: <NewspaperIcon size={20} />, label: 'Blog' },
    { path: '/contact', icon: <Phone size={20} />, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white font-bold text-xl"
          >
            Synnoviq
          </motion.div>
          
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-white bg-indigo-600'
                      : 'text-gray-300 hover:bg-indigo-600 hover:text-white'
                  }`
                }
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;