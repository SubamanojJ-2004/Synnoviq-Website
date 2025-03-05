import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">Get in Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-indigo-900/30 rounded-xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border-gray-700 rounded-lg px-4 py-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-800 border-gray-700 rounded-lg px-4 py-2"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full bg-gray-800 border-gray-700 rounded-lg px-4 py-2 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-indigo-900/30 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-4">
                <Mail className="text-indigo-400" size={24} />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-300">Subamanoj009@gmail.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-indigo-900/30 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-4">
                <Phone className="text-indigo-400" size={24} />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-300">+91-9677682766</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-indigo-900/30 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-4">
                <MapPin className="text-indigo-400" size={24} />
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-gray-300">45,Kr nagar Kovilpatti</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-indigo-900/30 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-4">
                <MessageSquare className="text-indigo-400" size={24} />
                <div>
                  <h3 className="font-bold">Live Chat</h3>
                  <p className="text-gray-300">Available 24/7 for support</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;