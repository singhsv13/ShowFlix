import { useContext, useEffect, useState } from "react";
import MovieList from "./MovieList";
import Pagination from "../shared/Pagination";
import moviesData from "../../data/movies.json";
import { useFavourites } from "../../hooks/useFavourites";
import { AuthContext } from "../../context/authcontext";
import PageHeading from "../shared/PageHeading";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12;

  const { favourites, addFavourite } = useFavourites(); // ✅ use helper, not dispatch
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setMovies(moviesData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-300">Loading movies... 🍿</p>
    );
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
    addFavourite(movie); // ✅ clean call
  };

  return (
    <section className="w-full py-10 px-4 sm:px-6 lg:px-8">
      {/* Main heading */}
      <PageHeading
        icon="fa-star"
        iconColor="text-yellow-400"
        title="ShowFlix"
        highlight="Spotlight"
      />

      <p className="mt-2 text-gray-300 text-center max-w-2xl mx-auto">
        Discover trending movies, explore hidden gems, and find your next
        favorite.
      </p>

      {/* Empty state */}
      {currentMovies.length === 0 ? (
        <p className="text-center text-gray-400 py-16 text-lg">
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
