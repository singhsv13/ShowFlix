import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./components/shared/authprovider.jsx";
import { FavouritesProvider } from "./components/favourites/favprovider.jsx";
import AppBackground from "./components/shared/appbackground.jsx";
import App from "./App.jsx";
import "./index.css";

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
