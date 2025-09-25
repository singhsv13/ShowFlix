import { useContext } from "react";
import { FavouritesContext } from "../context/FavContext";

export function useFavourites() {
  return useContext(FavouritesContext);
}