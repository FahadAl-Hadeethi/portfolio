import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 md:px-20 lg:px-40">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-6 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span role="img" aria-label="rocket">🚀</span> About Me <span role="img" aria-label="laptop">💻</span>
      </motion.h2>
      
      <motion.div 
        className="bg-gray-800 p-6 md:p-10 rounded-lg shadow-lg text-center max-w-4xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg md:text-xl mb-4">
          Hi! I'm <span className="font-bold text-blue-400">Fahad Al-Hadeethi</span>, a passionate <span className="font-semibold text-yellow-400">Full Stack Developer</span> who enjoys creating innovative web and mobile applications.
        </p>
        <p className="text-gray-300 text-base md:text-lg">
          I have a strong background in <span className="text-green-400">React, Node.js, MongoDB, Express, and Firebase</span>. I'm always eager to explore <span className="text-purple-400">new technologies and frameworks</span>.
        </p>
        <p className="mt-4 text-gray-300 text-base md:text-lg">
          I specialize in <span className="text-red-400">building scalable and user-friendly applications</span>, focusing on delivering seamless user experiences and optimized performance.
          When I'm not coding, I love experimenting with new tools, learning about <span className="text-indigo-400">DevOps</span>, and contributing to open-source projects.
        </p>
        <p className="mt-4 text-gray-300 text-base md:text-lg">
          My recent work includes <span className="text-blue-300">BizChats</span>, a real-time communication platform for educational institutions and businesses, as well as several exciting projects like an <span className="text-yellow-300">Employee Management System</span>, a <span className="text-green-300">Live Chat App</span>, and a <span className="text-cyan-300">Weather Forecast App</span>.
        </p>
      </motion.div>
      
      <motion.div 
        className="flex items-center gap-6 mt-8 text-xl md:text-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span className="flex items-center gap-2">🔥 Passion</span>
        <span className="flex items-center gap-2">🚀 Innovation</span>
        <span className="flex items-center gap-2">🤖 Problem-Solving</span>
      </motion.div>
    </div>
  );
};

export default About;
