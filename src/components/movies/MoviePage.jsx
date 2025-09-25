import { useContext, useEffect, useState } from "react";
import MovieList from "./MovieList";
import Pagination from "../shared/Pagination";
import moviesData from "../../data/movies.json";
import { useFavourites } from "../../hooks/useFavourites";
import { AuthContext } from "../../context/authcontext";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 14;

  const { favourites, dispatch } = useFavourites(); 
  const user = useContext(AuthContext);

  useEffect(() => {
    setMovies(moviesData);
    setLoading(false);
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading movies... 🍿</p>;
  }

  // Filter out movies already in favourites
  const availableMovies = movies.filter(
    (movie) => !favourites.some((fav) => fav.id === movie.id)
  );

  const indexOfLast = currentPage * moviesPerPage;
  const indexOfFirst = indexOfLast - moviesPerPage;
  const currentMovies = availableMovies.slice(indexOfFirst, indexOfLast);

  const handleAddFav = (movie) => {
    if (!user) {
      alert("You must be logged in to add favourites ❤️");
      return;
    }
    dispatch({ type: "add", movie });
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
      {/* Main heading */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <i className="fas fa-star text-yellow-400 text-3xl"></i>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
          ShowFlix <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">Spotlight</span>
        </h2>
      </div>

      <p className="mt-2 text-gray-500 text-center max-w-2xl mx-auto">
        Discover trending movies, explore hidden gems, and find your next favorite.
      </p>

      {/* Empty state */}
      {currentMovies.length === 0 ? (
        <p className="text-center text-gray-500 py-16 text-lg">
          No movies to show right now 🎬
        </p>
      ) : (
        <>
          {/* Movie grid */}
          <MovieList items={currentMovies} onAddToFav={handleAddFav} />

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(availableMovies.length / moviesPerPage)}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </section>
  );
}
