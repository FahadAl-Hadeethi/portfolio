import React from "react";
import ProjectCard from "../components/ProjectCard";
import bizchatsImage from "../assets/bizchats.png";
import mobileBizchatsImage from "../assets/mobilebizchats.png";
import managementImage from "../assets/managment.png";
import chatLiveImage from "../assets/live_chat.png";
import weatherImage from "../assets/weather.png";
import portfolioImage from "../assets/portfolio.png"; // Added Portfolio Image

const projects = [
  {
    title: "BizChats (Web)",
    description: "A web-based communication and collaboration platform for educational institutions and businesses.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/MilanTheMan/Bizchats",
    liveDemo: "https://main.dn5s0tbye754g.amplifyapp.com/",
    image: bizchatsImage,
  },
  {
    title: "BizChats (Mobile)",
    description: "A mobile version of BizChats built for iOS & Android, focusing on seamless real-time communication.",
    technologies: ["React Native", "Expo", "Firebase", "Socket.io"],
    github: "https://github.com/MilanTheMan/BizchatsMobile",
    liveDemo: "", // No live demo yet
    image: mobileBizchatsImage,
  },
  {
    title: "Employee Management System",
    description: "A web-based application to manage employees, roles, and departments efficiently.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/FahadAl-Hadeethi/Employee_Management_System",
    liveDemo: "https://one01432174-comp3123-assignment2-reactjs-pe0g.onrender.com/",
    image: managementImage,
  },
  {
    title: "Live Chat Application",
    description: "A real-time chat application allowing users to communicate instantly in public and private chat rooms.",
    technologies: ["React", "Node.js", "Express", "Socket.io"],
    github: "https://github.com/FahadAl-Hadeethi/chat_app",
    liveDemo: "https://live-chat-application-jbng.onrender.com",
    image: chatLiveImage,
  },
  {
    title: "Weather App",
    description: "A weather forecasting application that provides real-time weather updates based on user location.",
    technologies: ["React", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/FahadAl-Hadeethi/weather_app",
    liveDemo: "https://weather-app-ggzy.onrender.com",
    image: weatherImage,
  },
  {
    title: "Personal Portfolio",
    description: "A fully responsive portfolio website built using React.js, Tailwind CSS, and GitHub Pages. Showcases projects, skills, and experience.",
    technologies: ["React", "Tailwind CSS", "GitHub Pages", "Framer Motion"],
    github: "https://github.com/FahadAl-Hadeethi/portfolio",
    liveDemo: "https://fahadal-hadeethi.github.io/portfolio/",
    image: portfolioImage,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project, index) => <ProjectCard key={index} {...project} />)
        ) : (
          <p className="text-center text-gray-400">No projects available</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
