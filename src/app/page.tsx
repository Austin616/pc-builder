"use client";

import React from "react";
import Landing from "./landing/page";
import "./globals.css";

export default function Home() {
  return (
    <div className="bg-desktop-dark dark:bg-desktop-light bg-cover bg-no-repeat bg-center min-h-screen w-full flex items-center justify-center">
      <Landing />
    </div>
  );
}
