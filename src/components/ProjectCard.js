import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, technologies = [], github, liveDemo, image }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-4">
      <div className="w-full flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full max-h-48 object-contain rounded-lg mb-4"
        />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {technologies.length > 0 &&
          technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-blue-500 text-sm rounded-lg shadow-md">
              {tech}
            </span>
          ))}
      </div>
      <div className="flex items-center justify-between mt-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-2 bg-gray-700 hover:bg-gray-800 text-white text-sm rounded-lg shadow-md transition duration-300"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
        )}
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg shadow-md transition duration-300"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
