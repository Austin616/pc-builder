'use client';

import React from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-gray-300 dark:bg-gray-800">
        <h1 className="text-black dark:text-white">Hello, World!</h1>
      </div>
    </div>
  );
}
