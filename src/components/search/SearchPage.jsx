import React, { useState, useEffect } from "react";
import SearchBox from "./searchbox";
import MovieList from "../movies/movielist";
import Pagination from "../shared/pagination";
import moviesData from "../../data/movies.json";
import PageHeading from "../shared/pageheading";
import Loader from "../shared/loader";
import { useLoader } from "../../hooks/useLoader";

export default function SearchPage({ onAddToFavourites }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const loading = useLoader(query);

  const itemsPerPage = 12;

  useEffect(() => {
    if (!query) {
      setResults([]);
      setCurrentPage(1);
      return;
    }
    const filtered = moviesData.filter((movie) =>
      movie.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
    setCurrentPage(1);
  }, [query]);

  const totalPages = Math.ceil(results.length / itemsPerPage);
  const paginatedResults = results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        {/* Page heading */}
        <div className="text-center mb-10">
          <PageHeading
            icon="fa-search"
            iconColor="text-red-500"
            title="Search"
            highlight="Movies"
            description="Find trending movies, hidden gems, and your all-time favourites."
          />
        </div>

        {/* Search Box */}
        <SearchBox onSearch={(q) => setQuery(q)} />

        {loading ? (
          // 🔴 Show loader while fetching search results
          <Loader />
        ) : (
          <>
            {/* Results header */}
            {query && results.length > 0 && (
              <div className="mt-12 mb-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <i className="fas fa-search text-blue-400 text-xl sm:text-2xl"></i>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Results for{" "}
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">
                      "{query}"
                    </span>
                  </h2>
                  <i className="fas fa-clapperboard text-yellow-300 text-xl sm:text-2xl"></i>
                </div>
                <p className="text-sm sm:text-base text-gray-300 flex items-center justify-center gap-2">
                  <i className="fas fa-list-ol text-green-400"></i>
                  <span>
                    {results.length} result{results.length > 1 ? "s" : ""} found
                  </span>
                </p>
              </div>
            )}

            {/* No results message */}
            {query && results.length === 0 && (
              <div className="text-center mt-10">
                <i className="fas fa-sad-tear text-red-400 text-4xl mb-3"></i>
                <p className="text-lg sm:text-xl text-gray-300">
                  No results found for{" "}
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text font-semibold">
                    "{query}"
                  </span>
                </p>
                <p className="text-sm text-gray-400 mt-2 flex items-center justify-center gap-2">
                  <i className="fas fa-film text-yellow-400"></i>
                  Try searching with a different title
                </p>
              </div>
            )}

            {/* Movie List */}
            {results.length > 0 && (
              <div className="rounded-3xl p-4 shadow-2xl">
                <MovieList
                  items={paginatedResults}
                  onAddToFav={onAddToFavourites}
                />
              </div>
            )}

            {/* Pagination */}
            {results.length > itemsPerPage && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        )}
      </section>
    </>
  );
}
