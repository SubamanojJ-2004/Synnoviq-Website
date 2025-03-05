import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const ProjectCard = ({ position = [0, 0, 0] }: { position: [number, number, number] }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1.5, 1, 0.1]} />
      <meshStandardMaterial color="#4f46e5" />
    </mesh>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Game Engine",
      description: "Revolutionary game engine with built-in AI capabilities",
      image: "https://images.unsplash.com/photo-1614729939124-032d1e5c9bc5?auto=format&fit=crop&w=800",
      category: "Game Development"
    },
    {
      title: "Smart City Solution",
      description: "AI-driven urban management system",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=800",
      category: "AI Solutions"
    },
    {
      title: "Enterprise Software Suite",
      description: "Comprehensive business management platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
      category: "Software Development"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">Our Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative h-96"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <Canvas camera={{ position: [0, 0, 2] }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <Suspense fallback={null}>
                    <ProjectCard position={[0, 0, 0]} />
                  </Suspense>
                  <OrbitControls enableZoom={false} autoRotate />
                </Canvas>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <div className="text-sm text-indigo-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chat Assistant */}
        <div className="mt-20 bg-black/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Project Assistant</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-900 rounded-xl p-4 mb-4 h-64 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-900/50 rounded-lg p-3 ml-auto max-w-[80%]">
                    <p>How can I help you with your project today?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 border-gray-700 rounded-lg px-4 py-2"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;