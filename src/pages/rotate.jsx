import React from 'react';
import { motion } from 'framer-motion';

const TeamMemberCard = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
      className="relative h-[500px] group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 to-black/50 rounded-xl overflow-hidden backdrop-blur-sm border border-indigo-500/20">
        <div className="h-3/4 relative overflow-hidden">
          {/* Continuously rotating image */}
          <motion.div
            className="w-full h-full"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 20,  // Slower rotation (20 seconds per rotation)
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <img 
              src={`/images/${member.image}`} 
              alt={`${member.name} - ${member.role}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-6 text-center"
        >
          <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            {member.name}
          </h3>
          <p className="text-indigo-300 mb-3">{member.role}</p>
          <p className="text-gray-400 text-sm">{member.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};