"use client";
import React, { useState, useEffect } from "react";
import "../globals.css";
import Link from "next/link";
import { FaCartPlus, FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedPreference = localStorage.getItem("darkMode");
    if (savedPreference) {
      setDarkMode(savedPreference === "true");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="mt-8">
      <div className="max-w-3xl mx-auto flex justify-between p-4 items-center border-2 rounded-lg bg-white dark:bg-gray-800 shadow-md">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-400">
          Assemble
        </Link>
        
        {/* Nav links */}
        <div className="space-x-5 text-lg">
          <Link href="/build" className="text-gray-800 dark:text-white">
            Build
          </Link>
          <Link href="/parts" className="text-gray-800 dark:text-white">
            Parts
          </Link>
          <Link href="/about" className="text-gray-800 dark:text-white">
            About
          </Link>
          <Link href="/contact" className="text-gray-800 dark:text-white">
            Contact
          </Link>
        </div>
        {/* Dark mode toggle and cart icon */}
        <div className="flex space-x-4 cursor-pointer">
          <div className="border-2 p-2 rounded-lg flex items-center justify-center hover:text-blue-400 transition duration-300  hover:bg-gray-100 dark:hover:bg-gray-700">
            <button onClick={toggleDarkMode} className="cursor-pointer">
              {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </div>
          <div className="border-2 p-2 rounded-lg flex items-center justify-center hover:text-blue-400 transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Link href="/cart" className="">
              <FaCartPlus className="" size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
