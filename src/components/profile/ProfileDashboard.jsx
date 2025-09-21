import React from "react";
import { Outlet } from "react-router";
import useAuth from "../../hooks/useAuth"; // make sure this matches your export

export default function ProfileDashboard() {
  const { user } = useAuth(); // get the logged-in user from context

  return (
    <div className="space-y-10">
      {/* Dashboard Header */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-3">
          <i className="fas fa-tachometer-alt text-red-500 text-2xl"></i>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Profile Dashboard
          </h1>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white shadow rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* User Info */}
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-full bg-red-500 text-white flex items-center justify-center text-3xl font-bold">
            {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {user?.name || "User"}
            </h2>
            <p className="text-gray-600 flex items-center gap-2 mt-1">
              <i className="fas fa-envelope text-red-400"></i> {user?.email}
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2 mt-1">
              <i className="fas fa-id-badge text-red-400"></i> ID: {user?.id}
            </p>
          </div>
        </div>

        {/* Edit Button */}
        <button
          className="p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 hover:scale-110 transition transform flex-shrink-0 flex items-center justify-center mt-4 sm:mt-0"
          title="Edit Profile"
        >
          <i className="fas fa-edit"></i>
        </button>
      </div>

      {/* Favourites Section */}
      <Outlet />
    </div>
  );
}
