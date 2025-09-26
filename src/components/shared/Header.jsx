import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import {
  FaFilm,
  FaHeart,
  FaSearch,
  FaInfoCircle,
  FaUserCircle,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/home");
    alert(`Take Care, ${user.name}!`);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/brand icon.png"
            alt="ShowFlix Logo"
            className="h-8 w-8 md:h-10 md:w-10 object-contain"
          />
          <Link to="/home">
            <span className="hidden md:inline text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text tracking-wide">
              ShowFlix
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center text-white">
          <Link
            to="/all-shows"
            className="flex items-center gap-2 hover:text-red-400 transition-colors"
          >
            <FaFilm /> All Shows
          </Link>

          <Link
            to="/search"
            className="flex items-center gap-2 hover:text-red-400 transition-colors"
          >
            <FaSearch /> Search
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 hover:text-red-400 transition-colors"
          >
            <FaInfoCircle /> About
          </Link>

          {/* Auth */}
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <div
                className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:ring-2 hover:ring-red-400 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FaUserCircle className="text-white text-lg" />
              </div>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black/80 backdrop-blur-md shadow-lg rounded-md py-2 z-50 text-white">
                  <Link
                    to="/profile"
                    onClick={handleLinkClick}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-red-500/20 transition-colors"
                  >
                    <FaUserCircle /> My Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left flex items-center gap-2 px-4 py-2 hover:bg-red-500/20 transition-colors"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 hover:text-red-400 transition-colors"
            >
              <FaSignInAlt /> Login
            </Link>
          )}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-white hover:bg-white/20 transition-colors"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md shadow-lg text-white">
          <nav className="flex flex-col space-y-2 px-4 py-3">
            <Link
              to="/all-shows"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 hover:text-red-400"
            >
              <FaFilm /> All Shows
            </Link>
            <Link
              to="/search"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 hover:text-red-400"
            >
              <FaSearch /> Search
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 hover:text-red-400"
            >
              <FaInfoCircle /> About
            </Link>
            <hr className="border-gray-600" />
            {user ? (
              <>
                <Link
                  to="/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-red-400"
                >
                  <FaUserCircle /> My Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-left hover:text-red-400"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 hover:text-red-400"
              >
                <FaSignInAlt /> Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
