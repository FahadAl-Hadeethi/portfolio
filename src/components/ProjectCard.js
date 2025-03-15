import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, technologies, github, liveDemo, image }) => {
  return (
    <motion.div
      className="bg-gray-800 p-4 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-blue-500 text-sm rounded-lg shadow-md">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
          🔗 GitHub
        </a>
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 px-3 py-1 rounded-md text-sm"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
