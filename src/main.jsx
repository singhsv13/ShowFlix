import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./components/shared/AuthProvider.jsx";
import { FavouritesProvider } from "./components/favourites/FavProvider.jsx";
import App from "./App.jsx";

import "./index.css";
import AppBackground from "./components/shared/AppBackground.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <FavouritesProvider>
        <BrowserRouter>
          <AppBackground>
            <App />
          </AppBackground>
        </BrowserRouter>
      </FavouritesProvider>
    </AuthProvider>
  </StrictMode>
);
