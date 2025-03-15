import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaGithub, FaLinkedin } from "react-icons/fa";
import profilePhoto from "../assets/personalphoto.jpg";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12 pt-32">
            {/* Profile Section */}
            <div className="w-full bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <motion.img
                        src={profilePhoto}
                        alt="Fahad"
                        className="w-36 h-36 rounded-full border-4 border-blue-500"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    />
                    <h1 className="text-3xl font-bold mt-4">Fahad Al-Hadeethi</h1>
                    <p className="text-gray-400 text-lg">Full Stack Developer</p>
                    <p className="text-gray-400 text-lg flex items-center">
                        <FaMapMarkerAlt className="mr-2" /> Toronto, Ontario
                    </p>


                    <p className="flex items-center mt-2 text-gray-300">
                        <FaClock className="mr-2" /> {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })} (UTC -4:00)
                    </p>

                    <div className="flex space-x-4 mt-4">
                        <a href="https://github.com/FahadAl-Hadeethi" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl hover:text-blue-500" />
                        </a>
                        <a href="https://www.linkedin.com/in/fahad-al-hadeethi-94595b207/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-2xl hover:text-blue-500" />
                        </a>
                    </div>
                    <div className="flex justify-center gap-4 mt-6">
                        <a
                            href="/Fahad_Al-Hadeethi_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md 
                   transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-blue-600 hover:to-blue-700"
                        >
                            📄 View Resume
                        </a>
                        <a
                            href="/Fahad_Al-Hadeethi_CoverLetter.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 text-white font-semibold bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-md 
                   transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-gray-800 hover:to-gray-900"
                        >
                            📝 View Cover Letter
                        </a>
                    </div>


                </div>
            </div>

            {/* Philosophy/Statement of Career Goals Section */}
            <div className="mt-10">
                <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2">My Philosophy</h2>
                <p className="mt-2 text-gray-300">
                    "We are the facilitators of our own creative evolution." – Bill Hicks.
                </p>
                <p className="mt-4 text-gray-300">
                    I believe that technology is a powerful tool for innovation and transformation. As a Full Stack Developer, I am driven by a passion
                    for solving complex problems and creating intuitive digital experiences. My journey in software development is fueled by curiosity,
                    adaptability, and a strong commitment to continuous learning.
                </p>
                <p className="mt-4 text-gray-300">
                    I see my role as more than just writing code—I strive to bridge the gap between user needs and technological advancements.
                    Whether it's crafting scalable applications, optimizing performance, or leading collaborative projects, I approach every
                    challenge with resilience and creativity. Looking ahead, I aspire to contribute to cutting-edge solutions that make a meaningful
                    impact in the industry.
                </p>
            </div>


            {/* Education Section */}
            <div className="mt-10">
                <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2">Education</h2>
                <p className="mt-2 text-gray-300">
                    <strong>George Brown College</strong> - Advanced Diploma, Computer Programming and Analysis
                </p>
                <p>Graduation: April 2025 | <strong>GPA:</strong> 3.55/4.0</p>
            </div>

            {/* Experience Section */}
            <div className="mt-10">
                <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2">Experience</h2>

                {/* BizChats Web & Mobile */}
                <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold">Lead Developer - BizChats (Web & Mobile)</h3>
                    <p className="text-gray-400">Jan 2024 - Present</p>
                    <ul className="list-disc ml-4 mt-2 text-gray-300">
                        <li>Designed and developed a **real-time communication platform** for businesses and educational institutions.</li>
                        <li>Developed authentication, role-based access control, and file storage integrations.</li>
                        <li>Utilized **React, Node.js, React Native, AWS (S3, Amplify), MySQL, and WebSockets** for full-stack functionality.</li>
                        <li>Implemented **scalable microservices architecture** and optimized database performance.</li>
                    </ul>
                </div>

                {/* Employee Management System */}
                <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold">Developer - Employee Management System</h3>
                    <p className="text-gray-400">Feb 2024 - Present</p>
                    <ul className="list-disc ml-4 mt-2 text-gray-300">
                        <li>Developed a **full-stack HR application** to streamline employee record-keeping and management.</li>
                        <li>Implemented secure **authentication and role-based access control** for admin and employees.</li>
                        <li>Integrated RESTful APIs using **React, Node.js, and MongoDB** for seamless data handling.</li>
                        <li>Enhanced **UI/UX** with responsive design and interactive dashboards.</li>
                    </ul>
                </div>

                {/* Real-Time Live Chat Project */}
                <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold">Developer - LiveRoom Chat</h3>
                    <p className="text-gray-400">Mar 2024 - Present</p>
                    <ul className="list-disc ml-4 mt-2 text-gray-300">
                        <li>Designed and implemented a **real-time messaging application** with private and group chat functionalities.</li>
                        <li>Developed real-time WebSocket communication using **Socket.io, React, and Node.js**.</li>
                        <li>Implemented **user authentication, message history storage, and online status tracking**.</li>
                        <li>Optimized server performance and scalability for handling concurrent users.</li>
                    </ul>
                </div>
            </div>


            {/* Skills Section */}
            <div className="mt-10">
                <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2">Skills</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                    {[
                        "TypeScript", "Python", "Java", "C#", "HTML", "CSS", "React", "Node.js", "Express",
                        "Spring Boot", ".NET", "MongoDB", "MySQL", "PostgreSQL", "Docker", "Postman", "Git",
                        "Jenkins", "Jira", "AWS", "Agile", "Unit Testing"
                    ].map(skill => (
                        <span
                            key={skill}
                            className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Currently Working On Section */}
            <div className="mt-10">
                <h2 className="text-xl font-bold border-b-2 border-blue-500 pb-2">Currently Working On</h2>

                {/* BizChat Web */}
                <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold">BizChat Web Application</h3>
                    <p className="text-gray-400">
                        Enhancing the **BizChat** platform, a modern web-based collaboration and messaging tool designed for businesses and educational institutions.
                    </p>
                    <ul className="list-disc ml-4 mt-2 text-gray-300">
                        <li>Integrating advanced team communication features.</li>
                        <li>Enhancing the UI/UX using **React.js** and **Tailwind CSS**.</li>
                        <li>Optimizing database performance with **MySQL** on AWS.</li>
                        <li>Implementing role-based access and user authentication.</li>
                    </ul>
                </div>

                {/* BizChat Mobile */}
                <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold">BizChat Mobile Application</h3>
                    <p className="text-gray-400">
                        Developing a **React Native** version of **BizChat** to ensure seamless cross-platform communication and accessibility.
                    </p>
                    <ul className="list-disc ml-4 mt-2 text-gray-300">
                        <li>Building with **React Native** and **Expo** for iOS & Android.</li>
                        <li>Implementing real-time messaging with **Socket.io** and WebSockets.</li>
                        <li>Enhancing push notifications and offline functionality.</li>
                        <li>Ensuring seamless API integration with the web version.</li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Home;
