import React from "react";

export default function About() {
  return (
    <section className="flex justify-center items-center px-6 py-22">
      <div className="max-w-3xl p-10 sm:p-16 text-center bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-red-500/20 border border-white/20 relative overflow-hidden">
        
        {/* Decorative top-left gradient circle */}
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-gradient-to-tr from-red-500 to-pink-500 rounded-full opacity-20 blur-3xl pointer-events-none"></div>

        {/* Decorative bottom-right gradient circle */}
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-tr from-pink-500 to-red-500 rounded-full opacity-20 blur-3xl pointer-events-none"></div>

        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-6 relative z-10">
          <i className="fas fa-info-circle text-red-500 text-3xl"></i>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            About{" "}
            <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">
              ShowFlix
            </span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-8 relative z-10">
          Your companion for all things movies & shows.
        </p>

        {/* Body */}
        <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
          ShowFlix is your ultimate destination for discovering movies and TV
          shows. Browse trending titles, explore genres, and save your favorites
          — all in one sleek platform. Our goal is to make your streaming
          decisions simple, fun, and personalized.
        </p>

        {/* Footer note */}
        <p className="text-gray-400 text-sm relative z-10">
          Built with <span className="text-red-500">❤️</span> using React, Tailwind CSS, and modern web technologies.
        </p>
      </div>
    </section>
  );
}
