import { Routes, Route, Navigate } from "react-router";
import Home from "../Home";
import About from "../About";
import NotFound from "./NotFound";
import Favourites from "../favourites/Favourites";
import SearchPage from "../search/SearchPage";
import ProfileDashboard from "../profile/ProfileDashboard";
import MoviesPage from "../movies/MoviePage";
import Login from "../Login";
import ProtectedRoutes from "./ProtectedRoutes";

export default function AppRoutes() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Navigate to="/" />} />
				<Route path="/login" element={<Login />} />
				<Route path="/about" element={<About />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/all-shows" element={<MoviesPage />} />
				<Route
					path="/profile"
					element={
						<ProtectedRoutes>
							<ProfileDashboard />
						</ProtectedRoutes>
					}
				>
					<Route path="favourites" element={<Favourites />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}
