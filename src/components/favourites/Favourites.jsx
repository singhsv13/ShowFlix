import React, { useState } from "react";
import MovieList from "../movies/MovieList";
import Pagination from "../shared/Pagination";
import { useFavourites } from "../../hooks/useFavourites";
import { useLoader } from "../../hooks/useLoader";
import PageHeading from "../shared/PageHeading";
import Loader from "../shared/Loader";

export default function Favourites() {
  const { favourites, removeFavourite } = useFavourites();
  const [currentPage, setCurrentPage] = useState(1);
  const loading = useLoader(favourites);

  const moviesPerPage = 14;

  const handleRemoveFav = (id) => {
    removeFavourite(id);
  };

  const indexOfLast = currentPage * moviesPerPage;
  const indexOfFirst = indexOfLast - moviesPerPage;
  const currentMovies = favourites.slice(indexOfFirst, indexOfLast);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8">
      {/* Heading */}
      <PageHeading
        icon="fa-heart"
        iconColor="text-red-500"
        title="My"
        highlight="Favourites"
        description="Your hand-picked collection of movies and shows — ready to rewatch
        anytime."
      />

      {/* Loader + Favourites section */}
      {loading ? (
        <Loader />
      ) : !favourites || favourites.length === 0 ? (
        // Empty state
        <div className="flex flex-col items-center gap-4 mt-12">
          <i className="fas fa-film text-yellow-400 text-5xl sm:text-6xl"></i>
          <p className="text-gray-300 text-lg sm:text-xl">No favourites yet</p>
          <p className="text-gray-400 text-sm max-w-md text-center">
            Save movies you love, and they’ll show up here. Click the{" "}
            <i className="fas fa-heart text-red-500"></i> icon on any movie to
            add it to your favourites.
          </p>
        </div>
      ) : (
        // Movie list + Pagination
        <>
          <MovieList items={currentMovies} onRemove={handleRemoveFav} />

          <div className="mt-10 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(favourites.length / moviesPerPage)}
              onPageChange={setCurrentPage}
            />
          </div>
        </>
      )}
    </section>
  );
}
