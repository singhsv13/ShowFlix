import React from "react";

export default function About() {
  return (
    <section className="flex justify-center px-6 py-12">
      <div className="max-w-3xl p-8 sm:p-12 text-center">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <i className="fas fa-info-circle text-red-500 text-3xl"></i>
          <h2 className="text-4xl sm:text-4xl font-extrabold text-gray-900">
            About <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">ShowFlix</span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-lg text-gray-500 mb-8">
          Your companion for all things movies & shows.
        </p>

        {/* Body */}
        <p className="text-gray-600 leading-relaxed mb-6">
          ShowFlix is your ultimate destination for discovering movies and TV
          shows. Browse trending titles, explore genres, and save your favorites
          — all in one sleek platform. Our goal is to make your streaming
          decisions simple, fun, and personalized.
        </p>

        {/* Footer note */}
        <p className="text-gray-400 text-sm">
          Built with ❤️ using React, Tailwind CSS, and modern web technologies.
        </p>
      </div>
    </section>
  );
}
