import { Routes, Route, Navigate } from "react-router";
import Home from "../home";
import About from "../about";
import NotFound from "./notfound";
import Favourites from "../favourites/favourites";
import SearchPage from "../search/searchpage";
import ProfileDashboard from "../profile/profiledashboard";
import MoviesPage from "../movies/moviepage";
import Login from "../login";
import ProtectedRoutes from "./protectedroutes";

export default function AppRoutes() {
	return (
		<>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/" element={<Navigate to="/home" />} />
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
