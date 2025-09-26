import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black/20 backdrop-blur-xl shadow-inner mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:flex sm:items-center sm:justify-between">
        {/* Left side */}
        <p className="text-center sm:text-left text-gray-300 text-sm">
          &copy; {year}{" "}
          <span className="font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">
            ShowFlix
          </span>
          . All rights reserved.
        </p>

        {/* Right side */}
        <p className="mt-2 sm:mt-0 text-center sm:text-right text-gray-400 text-sm">
          Made with{" "}
          <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">
            ❤️
          </span>{" "}
          for movie lovers
        </p>
      </div>
    </footer>
  );
}
