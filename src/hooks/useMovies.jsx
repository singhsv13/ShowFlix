import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export default function useMovies(defaultQuery = "avengers") {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(defaultQuery);

  useEffect(() => {
    if (!query.trim()) return;

    async function fetchMovies() {
      setLoading(true);
      setError("");
      try {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
          setError(data.Error || "No movies found.");
        }
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError("Something went wrong while fetching movies.");
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [query]);

  return { movies, error, loading, setQuery };
}
