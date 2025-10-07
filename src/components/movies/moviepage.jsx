import { useContext, useEffect, useState } from "react";
import MovieList from "./movielist";
import Pagination from "../shared/pagination";
import moviesData from "../../data/movies.json";
import { useFavourites } from "../../hooks/useFavourites";
import { AuthContext } from "../../context/authcontext";
import PageHeading from "../shared/pageheading";
import Loader from "../shared/loader";
import { useLoader } from "../../hooks/useLoader";

export default function MoviesPage() {
	const [movies, setMovies] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const { user } = useContext(AuthContext);
	const { favourites, addFavourite } = useFavourites();
	const loading = useLoader(movies);
	const moviesPerPage = 12;


	// initial loading of data in the component
	useEffect(() => {
		setMovies(moviesData);
	}, []);

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
		addFavourite(movie);
	};

	return (
		<section className="w-full py-10 px-4 sm:px-6 lg:px-8">
			{/* Main heading */}
			<PageHeading
				icon="fa-star"
				iconColor="text-yellow-400"
				title="ShowFlix"
				highlight="Spotlight"
				description="Discover trending movies, explore hidden gems, and find your next
        favorite."
			/>

			{loading ? (
				// Show loader ONLY while fetching
				<Loader />
			) : currentMovies.length === 0 ? (
				// Empty state
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
