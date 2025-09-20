import React, { useState } from "react";
import { useDebounceCallback } from "../../hooks/useDebounceCallback";

export default function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("");
  // const [lastSearch, setLastSearch] = useState("");

  const debouncedSearch = useDebounceCallback((value) => {
    if (value.trim()) {
      onSearch(value);
      // setLastSearch(value);
    } else {
      onSearch("");
    }
  }, 300);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      // setLastSearch(query);
      setQuery(""); // clear input
    }
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="w-full max-w-lg mx-auto mb-8">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white border border-gray-300 rounded-full shadow-md overflow-hidden focus-within:ring-2 focus-within:ring-red-500 transition-all"
      >
        {/* Search Icon */}
        <span className="px-3 text-gray-400">
          <i className="fas fa-search"></i>
        </span>

        {/* Input */}
        <input
          type="text"
          placeholder="Search for shows..."
          value={query}
          onChange={handleChange}
          className="flex-grow px-2 py-2 text-gray-700 placeholder-gray-400 outline-none"
        />

        {/* Clear button (only shows if query has text) */}
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="px-3 text-gray-400 hover:text-red-500 transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
        )}

        {/* Search button */}
        <button
          type="submit"
          className="bg-red-500 text-white px-6 py-2 hover:bg-red-600 transition-colors rounded-r-full font-medium"
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </form>

      {/* Last search info */}
      {/* {lastSearch && (
        <div className="mt-3 p-3 bg-gray-100 border border-gray-300 rounded-lg shadow-sm text-sm text-gray-700">
          🔍 Last search: <span className="font-semibold">{lastSearch}</span>
        </div>
      )} */}
    </div>
  );
}
