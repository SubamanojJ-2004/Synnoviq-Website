import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const FloatingLogo = () => {
  return (
    <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#4f46e5" />
    </mesh>
  );
};

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 10 }}
      className="bg-indigo-900/30 p-6 rounded-xl backdrop-blur-sm"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const Home = () => {
  const services = [
    {
      title: "Game Development",
      description: "Creating immersive gaming experiences with cutting-edge technology",
      icon: "🎮"
    },
    {
      title: "AI Solutions",
      description: "Implementing intelligent systems for modern businesses",
      icon: "🤖"
    },
    {
      title: "Software Technology",
      description: "Building robust software solutions for complex problems",
      icon: "💻"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <FloatingLogo />
            </Suspense>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-6">Welcome to Synnoviq World</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Where innovation meets excellence in game development, AI, and software technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;