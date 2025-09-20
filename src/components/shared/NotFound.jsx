import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-16">
      <h1 className="text-7xl sm:text-8xl font-extrabold text-gray-800 mb-4">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-3">
        Page Not Found
      </h2>
      <p className="text-gray-500 max-w-md mb-8">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-red-500 text-white font-medium shadow hover:bg-red-600 transition"
      >
        Back to Home
      </Link>
    </section>
  );
}
