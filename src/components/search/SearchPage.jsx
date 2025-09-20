import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import MovieList from "../MovieList";
import Pagination from "../shared/Pagination";
import moviesData from "../../../public/movies.json";

export default function SearchPage({ onAddToFavourites }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 14; // adjust based on your grid

  // Filter movies based on query
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
    setCurrentPage(1); // reset to first page on new search
  }, [query]);

  // Pagination calculations
  const totalPages = Math.ceil(results.length / itemsPerPage);
  const paginatedResults = results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
      {/* Page heading */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <i className="fas fa-search text-red-500 text-3xl"></i>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Search <span className="text-red-500">Movies</span>
          </h1>
        </div>
        <p className="mt-2 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
          Find trending movies, hidden gems, and your all-time favourites.
        </p>
      </div>

      {/* Search Box */}
      <SearchBox onSearch={(q) => setQuery(q)} />

      {/* Results heading */}
      {query && results.length > 0 && (
        <div className="mt-12 flex items-center justify-center gap-3 mb-6">
          <i className="fas fa-film text-yellow-400 text-2xl"></i>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
            Search Results for "<span className="text-red-500">{query}</span>"
          </h2>
        </div>
      )}

      {/* No results message */}
      {query && results.length === 0 && (
        <p className="text-center text-gray-500 mt-6 text-lg">
          No results found for "<span className="text-red-500">{query}</span>" 😔
        </p>
      )}

      {/* Movie List */}
      <MovieList items={paginatedResults} onAddToFav={onAddToFavourites} />

      {/* Pagination */}
      {results.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  );
}
