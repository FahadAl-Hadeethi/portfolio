import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      {/* Contact Header */}
      <motion.h1
        className="text-3xl font-bold border-b-4 border-blue-500 pb-2 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        📬 Contact Me
      </motion.h1>

      {/* Contact Info Container */}
      <motion.div
        className="w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-gray-300 mb-4">
          Have a project in mind? Want to collaborate? Feel free to reach out! 🚀
        </p>

        {/* Contact Links */}
        <div className="flex flex-col gap-4">
          {/* Email */}
          <motion.a
            href="mailto:fahad@example.com"
            className="flex items-center justify-center gap-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-lg shadow-md text-lg font-medium"
            whileHover={{ scale: 1.1 }}
          >
            <FaEnvelope className="text-2xl" /> fahedihssan@gmail.com
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/fahad-al-hadeethi-94595b207/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 transition duration-300 rounded-lg shadow-md text-lg font-medium"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin className="text-2xl" /> Connect on LinkedIn
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/FahadAl-Hadeethi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-4 py-2 bg-gray-700 hover:bg-gray-800 transition duration-300 rounded-lg shadow-md text-lg font-medium"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub className="text-2xl" /> View My GitHub
          </motion.a>
        </div>
      </motion.div>

      {/* Fun Animation */}
      <motion.div
        className="mt-6 text-4xl"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 10 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        ✉️💻🚀
      </motion.div>
    </div>
  );
};

export default Contact;
