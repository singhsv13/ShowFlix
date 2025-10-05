import React, { useContext } from "react";
import { useFavourites } from "../../hooks/useFavourites";
import { AuthContext } from "../../context/authcontext";

export default function Card({ 
  id,
  name, 
  description, 
  poster, 
  rating, 
  genre, 
  year,
  isFavPage 
}) {
  const { favourites, dispatch } = useFavourites();
  const { user } = useContext(AuthContext);

  const isFav = favourites.some((m) => m.id === id);

  const handleFavClick = () => {
    if (isFav) {
      dispatch({ type: "remove", id });
    } else {
      dispatch({ 
        type: "add", 
        movie: { id, name, description, poster, rating, genre, year } 
      });
    }
  };

  return (
    <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden hover:shadow-red-500/40 transition-shadow duration-300 transform hover:-translate-y-1 group relative">
      
      {/* Poster */}
      <div className="relative overflow-hidden rounded-t-3xl">
        <img
          src={poster}
          alt={name}
          className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Gradient overlay for cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none rounded-t-3xl"></div>

        {/* Rating badge */}
        <div className="absolute top-2 left-2 bg-yellow-400 text-gray-900 font-bold text-xs px-2 py-1 rounded-md shadow-lg">
          ⭐ {rating}
        </div>

        {/* Favourite toggle button — only show if logged in */}
        {user && (
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition flex flex-col gap-2">
            <button
              onClick={handleFavClick}
              className={`bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md 
                          text-gray-600 hover:scale-110 transition
                          ${isFav || isFavPage ? "hover:text-red-500" : "hover:text-green-500"}`}
              title={
                isFavPage 
                  ? "Remove from Favourites" 
                  : isFav 
                    ? "Remove from Favourites" 
                    : "Add to Favourites"
              }
            >
              <i className={`fas ${isFav || isFavPage ? "fa-times" : "fa-heart"}`}></i>
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-white text-lg font-semibold truncate">{name}</h3>
        <p className="text-gray-300 text-sm line-clamp-3">{description}</p>

        {/* Meta info */}
        <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
          <span className="px-2 py-0.5 bg-white/20 rounded-full">{genre}</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
  );
}
