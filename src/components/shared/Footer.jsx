import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:flex sm:items-center sm:justify-between">
        {/* Left side */}
        <p className="text-center sm:text-left text-gray-600 text-sm">
          &copy; {year} <span className="font-semibold text-red-500">ShowFlix</span>. All rights reserved.
        </p>

        {/* Right side */}
        <p className="mt-2 sm:mt-0 text-center sm:text-right text-gray-500 text-sm">
          Made with <span className="text-red-500">❤️</span> for movie lovers
        </p>
      </div>
    </footer>
  );
}
