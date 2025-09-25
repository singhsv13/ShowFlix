import React from "react";
import { Link } from "react-router";
import { AlertTriangle } from "lucide-react"; // fun icon

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Visual/Icon */}
      <div className="mb-6 animate-bounce">
        <AlertTriangle className="w-20 h-20 text-red-500" />
      </div>

      {/* Main Heading */}
      <h1 className="text-8xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text mb-2 drop-shadow-lg">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 max-w-md mb-8">
        Oops! Looks like you took a wrong turn. <br />
        Don’t worry, even the best explorers get lost sometimes.
      </p>

      {/* CTA */}
      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-red-500 text-white font-medium shadow hover:shadow-lg hover:bg-red-600 transition-all duration-300"
      >
        Back to Home
      </Link>

      {/* Decorative Background Shapes */}
      <div className="absolute top-10 left-10 w-28 h-28 bg-red-100 rounded-full mix-blend-multiply blur-2xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-100 rounded-full mix-blend-multiply blur-2xl opacity-40 animate-pulse"></div>
    </section>
  );
}
