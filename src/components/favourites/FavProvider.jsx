import { useEffect, useReducer, useState, useContext } from "react";
import { FavouritesContext } from "../../context/FavContext";
import { AuthContext } from "../../context/authcontext";

function favReducer(state, action) {
  switch (action.type) {
    case "add":
      if (state.some((m) => m.id === action.movie.id)) return state;
      return [...state, action.movie];

    case "remove":
      return state.filter((fav) => fav.id !== action.id);

    case "set": // 🔹 new action to replace entire state when user changes
      return action.favourites || [];

    default:
      return state;
  }
}

export function FavouritesProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [favourites, dispatch] = useReducer(favReducer, []);

  const storageKey = `favourites_${user?.id || "guest"}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    dispatch({ type: "set", favourites: saved ? JSON.parse(saved) : [] });
  }, [user]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(favourites));
  }, [favourites, storageKey]);

  const addFavourite = (movie) => dispatch({ type: "add", movie });
  const removeFavourite = (id) => dispatch({ type: "remove", id });

  return (
    <FavouritesContext.Provider
      value={{ favourites, dispatch, addFavourite, removeFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
