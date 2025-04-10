"use client";
import React, { useState, useEffect } from "react";
import "../globals.css";
import Link from "next/link";
import {
  FaCartPlus,
  FaSun,
  FaMoon,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedPreference = localStorage.getItem("darkMode");
    if (savedPreference) {
      setDarkMode(savedPreference === "true");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
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
    <div className="mt-4">
      {!menuOpen && (
        <div className="max-w-5xl mx-auto px-4">
          {/* Navbar Wrapper */}
          <div className="flex flex-wrap justify-between items-center p-4 border-2 rounded-lg bg-white dark:bg-gray-800 shadow-md">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-400 transition-all duration-300 ease-in-out">
              Assemble
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex flex-wrap space-x-6 text-lg text-gray-800 dark:text-white">
              <Link href="/build">Build</Link>
              <Link href="/parts">Parts</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>

            {/* Icons */}
            <div className="flex flex-wrap items-center space-x-3 mt-2 md:mt-0">
              <Link href="/search" className="p-2 border-2 rounded-lg hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out">
                <FaSearch size={18} />
              </Link>
              <button onClick={toggleDarkMode} className="p-2 border-2 rounded-lg hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out">
                {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>
              <Link href="/cart" className="p-2 border-2 rounded-lg hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out">
                <FaCartPlus size={18} />
              </Link>
              <button onClick={() => setMenuOpen(true)} className="md:hidden p-2 border-2 rounded-lg hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out">
                <FaBars size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white/40 dark:bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-800 dark:text-white text-2xl hover:text-red-500 transition-all duration-200 ease-in-out"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>

          {/* Menu Content */}
          <div className="bg-white dark:bg-gray-800 border-2 shadow-lg rounded-xl p-8 w-full max-w-xs text-center space-y-4 text-lg text-gray-800 dark:text-white animate-slideDown flex flex-col items-center">
            <Link href="/build" onClick={() => setMenuOpen(false)}>Build</Link>
            <Link href="/parts" onClick={() => setMenuOpen(false)}>Parts</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
