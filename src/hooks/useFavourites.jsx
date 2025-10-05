import { useContext } from "react";
import { FavouritesContext } from "../context/favcontext";

export function useFavourites() {
  return useContext(FavouritesContext);
}