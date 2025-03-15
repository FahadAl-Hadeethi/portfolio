import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-md z-50">
      <ul className="flex justify-center space-x-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>

        {/* Capstone Dropdown */}
        <li className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="focus:outline-none"
          >
            Capstone ⬇
          </button>
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-64 bg-gray-800 text-white rounded-lg shadow-lg">
              <li className="px-4 py-2 bg-gray-700 font-semibold">📂 Capstone Files</li>

              {/* Project Documents */}
              <li><a href="/F24_T48_Project_Summary.pdf" target="_blank" className="block px-4 py-2 hover:bg-gray-700">📜 Project Summary</a></li>
              <li><a href="/F24_T48_Project_Vision.pdf" target="_blank" className="block px-4 py-2 hover:bg-gray-700">🎯 Project Vision</a></li>
              <li><a href="/F24_T48_High_Level_Requirements.pdf" target="_blank" className="block px-4 py-2 hover:bg-gray-700">📑 High-Level Requirements</a></li>
              <li><a href="/F24_T48_Technology_Requirements_Learning_Plan.pdf" target="_blank" className="block px-4 py-2 hover:bg-gray-700">🖥 Technology Requirements</a></li>

              {/* Planning & Reports */}
              <li><a href="/W25_T48_Project Plan_v2.0.pdf" target="_blank" className="block px-4 py-2 hover:bg-gray-700">🗂 Project Plan</a></li>
              <li><a href="/W25_T48_ProjectReport1.pdf" target="_blank" className="block px-4 py-2 hover:bg-gray-700">📊 Project Status Report</a></li>

              {/* Design & Mockups */}
              <li><a href="/BizChats_Website.pdf" target="_blank" className="block px-4 py-2 hover:bg-gray-700">🎨 Wireframes & Mockups</a></li>

              {/* System Implementation - Redirects to Website */}
              <li>
                <a href="https://main.dn5s0tbye754g.amplifyapp.com/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-700">
                  ⚙️ System Implementation (Live Site)
                </a>
              </li>
            </ul>
          )}
        </li>

        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
