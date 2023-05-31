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
        <div className="cursor-pointer flex items-center">
          {isDarkMode ? (
            <img src="/vectorlogo.svg" alt="" className="w-8 mr-2" />
          ) : (
            <img src="/vectorlogo2.svg" alt="" className="w-8 mr-2" />
          )}
          <span className="logo text-black dark:text-emerald-50 font-semibold text-base sm:text-xl">
            AyurvedaGPT
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <a
          href="https://github.com/Aaryan6/AyurvedaGPT-react"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mr-6"
        >
          <FaGithub className="text-xl sm:text-2xl text-black dark:text-[#fff]" />
        </a>
        <button className="text-white" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <FaSun className="text-xl sm:text-2xl  text-black dark:text-[#fff]" />
          ) : (
            <FaMoon className="text-xl sm:text-2xl  text-black dark:text-[#fff]" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
