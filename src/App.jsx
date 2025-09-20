import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import AppRoutes from "./components/shared/AppRoutes";
import { Outlet } from "react-router";

import "./App.css";

// Reducer for managing favourites
function favReducer(state, action) {

  switch (action.type) {
    case "add":
      if (state.some((m) => m.id === action.movie.id)) return state;
      return [...state, action.movie];

    case "remove":
      return state.filter((fav) => fav.id !== action.id);

    default:
      return state;
  }
}

function App() {
 
  return (
    <div className="flex flex-col min-h-screen">

      <Header />

      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <AppRoutes>
            <Outlet />
          </AppRoutes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
