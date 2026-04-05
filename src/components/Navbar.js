import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 px-6 shadow-md z-50">
      <ul className="flex justify-center space-x-8 text-sm md:text-base font-medium">

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition duration-200 ${
                isActive ? "text-blue-400" : "hover:text-blue-400"
              }`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `transition duration-200 ${
                isActive ? "text-blue-400" : "hover:text-blue-400"
              }`
            }
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition duration-200 ${
                isActive ? "text-blue-400" : "hover:text-blue-400"
              }`
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition duration-200 ${
                isActive ? "text-blue-400" : "hover:text-blue-400"
              }`
            }
          >
            Contact
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;