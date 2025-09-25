import React from "react";
import { Link } from "react-router";
import { Flame, Search, Heart, PlayCircle, Info } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center my-10 px-4">
      {/* Hero Section */}
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">ShowFlix</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          Discover. Explore. Save. The smarter way to enjoy movies and TV shows.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/all-shows"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
          >
            <PlayCircle size={20} />
            Explore Now
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:shadow-md transition"
          >
            <Info size={20} />
            Learn More
          </Link>
        </div>
      </div>

      {/* Highlights / Features */}
      <section className="mt-16 grid gap-8 sm:grid-cols-3 max-w-4xl w-full">
        <div className="group p-6 bg-white rounded-2xl shadow hover:shadow-xl transition flex flex-col items-center text-center hover:scale-105">
          <Flame className="text-red-500 mb-3 group-hover:scale-110 transition-transform" size={36} />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Trending Picks</h3>
          <p className="text-gray-500 text-sm">
            Stay updated with what’s hot and popular right now.
          </p>
        </div>

        <div className="group p-6 bg-white rounded-2xl shadow hover:shadow-xl transition flex flex-col items-center text-center hover:scale-105">
          <Search className="text-blue-500 mb-3 group-hover:scale-110 transition-transform" size={36} />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Smart Search</h3>
          <p className="text-gray-500 text-sm">
            Quickly find movies & shows tailored to your taste.
          </p>
        </div>

        <div className="group p-6 bg-white rounded-2xl shadow hover:shadow-xl transition flex flex-col items-center text-center hover:scale-105">
          <Heart className="text-pink-500 mb-3 group-hover:scale-110 transition-transform" size={36} />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Save Favorites</h3>
          <p className="text-gray-500 text-sm">
            Bookmark what you love and come back anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
