import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 px-2 max-w-5xl mx-auto">
      <div className="flex items-center">
        <span className="text-black font-bold text-lg">AyurvedaGPT</span>
      </div>
      <div className="flex items-center">
        <a
          href="https://github.com/your-github-url"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 mr-4"
        >
          <FaGithub className="text-xl text-black" />
        </a>
        <a
          href="https://linkedin.com/your-linkedin-url"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
        >
          <FaLinkedin className="text-xl text-black" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
