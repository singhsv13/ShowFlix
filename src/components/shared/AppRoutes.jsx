import { Routes ,Route, Navigate } from "react-router";
import Home from "../Home";
import About from "../About";
import NotFound from "./NotFound";
import Favourites from "../Favourites";
import MovieList from "../MovieList";
import SearchPage from "../search/SearchPage";
import ProfileDashboard from "../profile/ProfileDashboard";
import MoviesPage from "../MoviePage";

export default function AppRoutes(){
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Navigate to="/" />}/>
                <Route path="/about" element={<About/>} />
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/favourites" element={<Favourites/>} />
                <Route path="/all-shows" element={<MoviesPage/>} />
                {/* <Route path="/login" element={<Login/>} /> */}
                <Route path="/profile" element={<ProfileDashboard/>}>
                    <Route path=":id" element={<ProfileDashboard/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}