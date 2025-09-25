import React, { useState } from "react";
import MovieList from "../movies/MovieList";
import Pagination from "../shared/Pagination";
import { useFavourites } from "../../hooks/useFavourites";

export default function Favourites() {
  const { favourites, removeFavourite } = useFavourites();
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 14;

  const handleRemoveFav = (id) => {
  removeFavourite({ type: "remove", id });
};

  if (!favourites || favourites.length === 0) {
    return (
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <i className="fas fa-heart text-red-500 text-3xl"></i>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            My <span className="bg-gradient-to-tr from-red-500 to-pink-500 text-white">Favourites</span>
          </h2>
        </div>
        <p className="text-gray-500 text-lg">No favourites yet ❤️</p>
        <p className="mt-2 text-gray-400 text-sm">
          Save movies you love, and they’ll show up here.
        </p>
      </section>
    );
  }

  const indexOfLast = currentPage * moviesPerPage;
  const indexOfFirst = indexOfLast - moviesPerPage;
  const currentMovies = favourites.slice(indexOfFirst, indexOfLast);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <i className="fas fa-heart text-red-500 text-3xl"></i>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
          My <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">Favourites</span>
        </h2>
      </div>
      <p className="mt-2 text-gray-500 text-center max-w-xl mx-auto">
        Your hand-picked collection of movies and shows — ready to rewatch
        anytime.
      </p>

      {/* Movie list */}
      <MovieList items={currentMovies} onRemove={handleRemoveFav} />

      {/* Pagination */}
      <div className="mt-10 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(favourites.length / moviesPerPage)}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}
