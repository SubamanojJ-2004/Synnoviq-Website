import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedText = () => {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.2;
      group.current.rotation.y = Math.cos(clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <Float speed={4} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={group}>
        {/* Create a dev symbol using basic geometries */}
        <mesh position={[-2, 0, 0]}>
          <boxGeometry args={[0.5, 3, 0.1]} />
          <meshStandardMaterial color="#4f46e5" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.5, 4, 0.1]} />
          <meshStandardMaterial color="#4f46e5" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[2, 0, 0]}>
          <boxGeometry args={[0.5, 3, 0.1]} />
          <meshStandardMaterial color="#4f46e5" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
};

const TeamMember = ({ position = [0, 0, 0], hover = false }: { position: [number, number, number]; hover?: boolean }) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      if (hover) {
        mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 2) * 0.1;
        mesh.current.rotation.y += 0.02;
      } else {
        mesh.current.rotation.y += 0.005;
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} position={position}>
        <boxGeometry args={[2, 2, 0.2]} />
        <meshStandardMaterial
          color="#4f46e5"
          roughness={0.3}
          metalness={0.7}
          emissive="#4f46e5"
          emissiveIntensity={hover ? 0.5 : 0.2}
        />
      </mesh>
    </Float>
  );
};

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.5, 0]);

  const teamMembers = [
    {
      name: "ABISHEK ",
      role: "CEO & Founder",
      image: "abishek.png",
      description: "Visionary leader with Game Development in tech innovation"
    },
    {
      name: "Stalin M",
      role: "Chief Executive Officer",
      image: "Stalin.png",
      description: "Blinder Expert Technology Developer"
    },
    {
      name: "Subamanoj J",
      role: "Lead Frontend Developer",
      image: "",
      description: "Full-Stack with Loyal Frontend-Developer"
    },
  ];

  const timelineEvents = [
    { year: 2025, title: "Company Founded", description: "Started with a vision to revolutionize tech In Game Development" },
    { year: 2025, title: "First Major Project", description: "Launched our Extraordinary Game Development Project" },
    { year: 2025, title: "Team Expansion", description: "Grew to Nearly 50+ Fresher Team Members" },
    { year: 2025, title: "Global Recognition", description: "In Future We Received multiple industry awards" },
  ];

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <motion.section
        style={{ y, opacity }}
        className="h-screen relative overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <spotLight position={[-10, -10, -10]} intensity={0.5} />
            <Suspense fallback={null}>
              <AnimatedText />
            </Suspense>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
          </Canvas>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-center"
        >
          <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            We Build The Future Game Developers
          </h1>
          <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
            Transforming ideas into exceptional Unity experiences
          </p>
        </motion.div>
      </motion.section>

      {/* Team Section with 3D Cards */}
      <section className="py-32 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center mb-24"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="relative h-[500px] group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 to-black/50 rounded-xl overflow-hidden backdrop-blur-sm border border-indigo-500/20">
                  <div className="h-3/4 relative">
                    <Canvas camera={{ position: [0, 0, 3] }}>
                      <ambientLight intensity={0.5} />
                      <pointLight position={[10, 10, 10]} />
                      <Suspense fallback={null}>
                        <TeamMember position={[0, 0, 0]} hover={true} />
                      </Suspense>
                      <OrbitControls enableZoom={false} autoRotate />
                    </Canvas>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                    />
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
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 px-4 bg-black/30">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center mb-24"
          >
            Our Journey
          </motion.h2>
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex items-center gap-8 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-32 h-32 flex items-center justify-center bg-indigo-900/30 rounded-full border-2 border-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-300"
                >
                  <span className="text-3xl font-bold text-indigo-400 group-hover:text-indigo-300">
                    {event.year}
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-8 rounded-xl backdrop-blur-sm border border-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-3 text-indigo-300">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;