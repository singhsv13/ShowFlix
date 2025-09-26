import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import AppRoutes from "./components/shared/AppRoutes";
import { Outlet } from "react-router";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow overflow-x-hidden">
        <div className="mx-auto p-4 mt-4 max-w-screen-xl">
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
