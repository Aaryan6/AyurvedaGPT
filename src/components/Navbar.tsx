import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const darkModeClass = "dark";
    const body = document.body;

    if (isDarkMode) {
      body.classList.add(darkModeClass);
    } else {
      body.classList.remove(darkModeClass);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="flex items-center justify-between p-4 sm:p-6 px-4 sm:px-10 max-w-8xl mx-auto w-full">
      <div className="flex items-center">
        <span className="text-black dark:text-[#dfdfdf] font-semibold text-base sm:text-xl">
          AyurvedaGPT
        </span>
      </div>
      <div className="flex items-center">
        <a
          href="https://github.com/Aaryan6/AyurvedaGPT-react"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-slate-200 mr-6"
        >
          <FaGithub className="text-xl sm:text-2xl text-black dark:text-[#dfdfdf]" />
        </a>
        <button
          className="text-white hover:text-gray-300"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <FaSun className="text-xl sm:text-2xl  text-black dark:text-[#dfdfdf]" />
          ) : (
            <FaMoon className="text-xl sm:text-2xl  text-black dark:text-[#dfdfdf]" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
