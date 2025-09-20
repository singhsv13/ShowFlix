import React, { useState } from "react";
import MovieList from "./MovieList";
import Pagination from "./shared/Pagination";

export default function Favourites({ items, onRemove }) {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12; // you can tweak this

  if (!items || items.length === 0) {
    return (
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <i className="fas fa-heart text-red-500 text-3xl"></i>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            My <span className="text-red-500">Favourites</span>
          </h2>
        </div>
        <p className="text-gray-500 text-lg">No favourites yet ❤️</p>
        <p className="mt-2 text-gray-400 text-sm">
          Save movies you love, and they’ll show up here.
        </p>
      </section>
    );
  }

  // Pagination logic
  const indexOfLast = currentPage * moviesPerPage;
  const indexOfFirst = indexOfLast - moviesPerPage;
  const currentItems = items.slice(indexOfFirst, indexOfLast);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <i className="fas fa-heart text-red-500 text-3xl"></i>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
          My <span className="text-red-500">Favourites</span>
        </h2>
      </div>
      <p className="mt-2 text-gray-500 text-center max-w-xl mx-auto">
        Your hand-picked collection of movies and shows — ready to rewatch anytime.
      </p>

      {/* Movie list */}
      <MovieList items={currentItems} onRemove={onRemove} />

      {/* Pagination */}
      <div className="mt-10 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalItems={items.length}
          itemsPerPage={moviesPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}
