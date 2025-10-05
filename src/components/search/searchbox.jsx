import React, { useState } from "react";
import { useDebounceCallback } from "../../hooks/useDebounceCallback";

export default function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("");

  const debouncedSearch = useDebounceCallback((value) => {
    if (value.trim()) {
      onSearch(value);
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
      setQuery(""); 
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
        className="flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl overflow-hidden focus-within:ring-2 focus-within:ring-red-400 transition-all"
      >
        {/* Search icon */}
        <span className="px-3 text-gray-300">
          <i className="fas fa-search"></i>
        </span>

        {/* Input */}
        <input
          type="text"
          placeholder="Search for shows..."
          value={query}
          onChange={handleChange}
          className="flex-grow px-2 py-2 text-white placeholder-gray-400 outline-none"
        />

        {/* Clear button */}
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="px-3 text-gray-300 hover:text-red-500 transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
        )}

        {/* Search button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 hover:from-red-600 hover:to-pink-600 transition-colors rounded-r-full font-medium"
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </form>
    </div>
  );
}
