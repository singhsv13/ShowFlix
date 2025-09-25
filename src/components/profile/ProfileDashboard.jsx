import React from "react";
import { Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";
import Favourites from "../favourites/Favourites"

export default function ProfileDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-12">
      {/* Dashboard Header */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <i className="fas fa-tachometer-alt text-red-500 text-3xl"></i>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
            Profile <span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">Dashboard</span>
          </h2>
        </div>
        <p className="text-gray-500 text-center mt-2 text-sm sm:text-base max-w-xl mx-auto">
          Manage your account, view favourites, and keep things personal 🎬
        </p>
      </section>

      {/* Profile Card */}
      <div className="flex justify-center">
        <div className="w-full sm:w-1/3 bg-white relative shadow-xl rounded-3xl p-6 flex flex-col items-center gap-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          {/* Decorative background circle behind avatar */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-100 rounded-full -z-10"></div>

          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-red-500 to-red-400 text-white flex items-center justify-center text-4xl font-bold shadow-lg ring-4 ring-red-100">
            {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>

          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
              {user?.name || "User"}
            </h2>
            <p className="text-gray-600 flex items-center justify-center gap-2 text-sm sm:text-base">
              <i className="fas fa-envelope text-red-400"></i> {user?.email}
            </p>
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <i className="fas fa-id-badge text-red-400"></i> ID: {user?.id}
            </p>
          </div>

          <button
            className="mt-4 px-5 py-2 bg-red-500 text-white rounded-xl shadow-md hover:bg-red-600 hover:shadow-lg hover:scale-105 transition transform flex items-center gap-2 text-sm sm:text-base font-medium"
            title="Edit Profile"
          >
            <i className="fas fa-edit"></i>
          </button>
        </div>
      </div>

      {/* Favourites Section */}
      <div className="mt-10">
        {/* <Outlet /> */}
        <Favourites/>
      </div>
    </div>
  );
}
