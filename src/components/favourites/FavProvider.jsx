import { useEffect, useReducer } from "react";
import { FavouritesContext } from "../../context/FavContext";

function favReducer(state, action) {
  switch (action.type) {
    case "add":
      if (state.some((m) => m.id === action.movie.id)) 
        return state;
      return [...state, action.movie];

    case "remove":
      return state.filter((fav) => fav.id !== action.id);

    default:
      return state;
  }
}

export function FavouritesProvider({ children }) {
  // Load from localStorage
  const initialFavs = () => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  };

  const [favourites, dispatch] = useReducer(favReducer, [], initialFavs);

  // Persist to localStorage whenever favourites change
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <FavouritesContext.Provider value={{ favourites, dispatch }}>
      {children}
    </FavouritesContext.Provider>
  );
}
