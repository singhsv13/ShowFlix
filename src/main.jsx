import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./components/shared/AuthProvider.jsx";
import { FavouritesProvider } from "./components/favourites/FavProvider.jsx";
import App from "./App.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <FavouritesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavouritesProvider>
    </AuthProvider>
  </StrictMode>
);
