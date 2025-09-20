import React, { useState } from "react";
import { Link } from "react-router";
import {
  FaFilm,
  FaHeart,
  FaSearch,
  FaInfoCircle,
  FaUserCircle,
  FaListUl,
  FaTv,
} from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/brand icon.png"
            alt="ShowFlix Logo"
            className="h-8 w-8 md:h-10 md:w-10 object-contain"
          />
          <Link to="/home">
            <span className="hidden md:inline text-2xl font-bold text-red-500 tracking-wide">
              ShowFlix
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center text-gray-700">
          <Link
            to="/all-shows"
            className="flex items-center gap-2 hover:text-red-500 transition-colors"
          >
            <FaFilm /> All Shows
          </Link>

          <Link
            to="/favourites"
            className="flex items-center gap-2 hover:text-red-500 transition-colors"
          >
            <FaHeart /> Favourites
          </Link>

          <Link
            to="/search"
            className="flex items-center gap-2 hover:text-red-500 transition-colors"
          >
            <FaSearch /> Search
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 hover:text-red-500 transition-colors"
          >
            <FaInfoCircle /> About
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <div
              className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center hover:ring-2 hover:ring-red-400 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaUserCircle className="text-gray-600 text-lg" />
            </div>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <FaUserCircle /> My Profile
                </Link>
                {/* <Link
                  to="/profile/favourites"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <FaHeart /> My Favourites
                </Link>
                <Link
                  to="/profile/shows"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <FaTv /> My Shows
                </Link> */}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 px-4 py-3 text-gray-700">
            <Link to="/all-shows" className="flex items-center gap-2 hover:text-red-500">
              <FaFilm /> All Shows
            </Link>
            <Link to="/favourites" className="flex items-center gap-2 hover:text-red-500">
              <FaHeart /> Favourites
            </Link>
            <Link to="/search" className="flex items-center gap-2 hover:text-red-500">
              <FaSearch /> Search
            </Link>
            <Link to="/about" className="flex items-center gap-2 hover:text-red-500">
              <FaInfoCircle /> About
            </Link>
            <hr />
            <Link to="/profile" className="flex items-center gap-2 hover:text-red-500">
              <FaUserCircle /> My Profile
            </Link>
            {/* <Link to="/profile/favourites" className="flex items-center gap-2 hover:text-red-500">
              <FaHeart /> My Favourites
            </Link>
            <Link to="/profile/shows" className="flex items-center gap-2 hover:text-red-500">
              <FaTv /> My Shows
            </Link> */}
          </nav>
        </div>
      )}
    </header>
  );
}
