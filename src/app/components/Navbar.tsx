'use client'; 
import React, { useState, useEffect } from 'react';
import { Switch } from "@/components/ui/switch"
import '../globals.css';
import Link from 'next/link';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedPreference = localStorage.getItem('darkMode');
    if (savedPreference) {
      setDarkMode(savedPreference === 'true');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode.toString());
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex items-center justify-between p-6 bg-gray-200 dark:bg-gray-800 shadow-lg">
      {/* Left side: Title */}
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-2xl font-extrabold text-gray-900 dark:text-white hover:text-blue-500 transition duration-200">PC Builder</Link>
      </div>

      {/* Center: Navigation Links */}
      <div className="flex items-center space-x-8">  {/* Increased space between links */}
        <Link href="/" className="text-lg text-gray-900 dark:text-white hover:text-blue-500 transition duration-200">Home</Link>
        <Link href="/build" className="text-lg text-gray-900 dark:text-white hover:text-blue-500 transition duration-200">Build</Link>
        <Link href="/parts" className="text-lg text-gray-900 dark:text-white hover:text-blue-500 transition duration-200">Parts</Link>
        <Link href="/about" className="text-lg text-gray-900 dark:text-white hover:text-blue-500 transition duration-200">About</Link>
      </div>

      {/* Right side: Dark Mode Toggle */}
      <div className="flex items-center space-x-4">
        <span className="text-lg text-gray-900 dark:text-white">Dark Mode</span>
        <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
      </div>
    </div>
  );
};

export default Navbar;
