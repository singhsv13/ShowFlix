import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center my-3">
      {/* Hero Section */}
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-red-500">ShowFlix</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          Discover. Explore. Save. The smarter way to enjoy movies and TV shows.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/all-shows"
            className="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition"
          >
            Explore Now
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Highlights / Features */}
      <section className="mt-16 grid gap-8 sm:grid-cols-3 max-w-4xl w-full">
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Trending Picks</h3>
          <p className="text-gray-500 text-sm">
            Stay updated with what’s hot and popular right now.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Smart Search</h3>
          <p className="text-gray-500 text-sm">
            Quickly find movies & shows tailored to your taste.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Save Favorites</h3>
          <p className="text-gray-500 text-sm">
            Bookmark what you love and come back anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
