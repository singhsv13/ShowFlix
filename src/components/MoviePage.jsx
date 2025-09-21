import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import Pagination from "./shared/Pagination";
import moviesData from "../data/movies.json";

export default function MoviesPage({ onAddToFavourites }) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const moviesPerPage = 14;

	// useEffect(() => {
	//   fetch("../data/movies.json")
	//     .then((res) => res.json())
	//     .then((data) => {
	//       setMovies(data);
	//       setLoading(false);
	//     })
	//     .catch((err) => {
	//       console.error("Error fetching movies:", err);
	//       setLoading(false);
	//     });
	// }, []);

	useEffect(() => {
		setMovies(moviesData);
		setLoading(false);
	}, []);

	if (loading) {
		return <p className="text-center mt-10">Loading movies... 🍿</p>;
	}

	const indexOfLast = currentPage * moviesPerPage;
	const indexOfFirst = indexOfLast - moviesPerPage;
	const currentMovies = movies.slice(indexOfFirst, indexOfLast);

	return (
		<section className="w-full px-4 sm:px-6 lg:px-8 py-12">
			{/* Main heading */}
			<div className="flex items-center justify-center gap-3 mb-4">
				<i className="fas fa-star text-yellow-400 text-3xl"></i>
				<h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
					ShowFlix <span className="text-red-500">Spotlight</span>
				</h2>
			</div>

			<p className="mt-2 text-gray-500 text-center max-w-2xl mx-auto">
				Discover trending movies, explore hidden gems, and find your next
				favorite.
			</p>

			{/* Empty state */}
			{currentMovies.length === 0 ? (
				<p className="text-center text-gray-500 py-16 text-lg">
					No movies to show right now 🎬
				</p>
			) : (
				<>
					{/* Movie grid */}
					<MovieList items={currentMovies} onAddToFav={onAddToFavourites} />

					{/* Pagination */}
					<Pagination
						currentPage={currentPage}
						totalPages={Math.ceil(movies.length / moviesPerPage)}
						onPageChange={setCurrentPage}
					/>
				</>
			)}
		</section>
	);
}
