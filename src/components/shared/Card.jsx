import React from "react";

export default function Card({ 
  name, 
  description, 
  poster, 
  rating, 
  genre, 
  year,
  onAddToFav,     // optional
  onRemoveFromFav // optional
}) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden group relative">
      {/* Poster */}
      <div className="relative">
        <img
          src={poster}
          alt={name}
          className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Rating badge */}
        <div className="absolute top-2 left-2 bg-yellow-400 text-gray-900 font-bold text-xs px-2 py-1 rounded-md shadow">
          ⭐ {rating}
        </div>

        {/* Action buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
          {/* Add to Favourites */}
          {onAddToFav && (
            <button
              onClick={onAddToFav}
              className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow 
                         text-gray-600 hover:text-red-500 hover:scale-110 transition"
              title="Add to Favourites"
            >
              <i className="fas fa-heart"></i>
            </button>
          )}

          {/* Remove from Favourites */}
          {onRemoveFromFav && (
            <button
              onClick={onRemoveFromFav}
              className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow 
                         text-gray-600 hover:text-red-500 hover:scale-110 transition"
              title="Remove from Favourites"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-xs text-gray-600 mt-1 line-clamp-2">{description}</p>

        {/* Meta info */}
        <div className="flex items-center justify-between mt-3 text-[10px] text-gray-500">
          <span className="px-2 py-0.5 bg-gray-100 rounded">{genre}</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
  );
}
