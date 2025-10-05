import React from "react";
import { Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";
import Favourites from "../favourites/favourites";
import PageHeading from "../shared/pageheading";

export default function ProfileDashboard() {
	const { user } = useAuth();

	return (
		<div className="space-y-12">
			{/* Dashboard Header */}
			<section className="w-full px-4 sm:px-6 lg:px-8 py-12">
				<PageHeading
					icon="fa-tachometer-alt"
					iconColor="text-red-500"
					title="Profile"
					highlight="Dashboard"
					description="Manage your account, view favourites, and keep things personal."
				/>
			</section>

			{/* Profile Card */}
			<div className="flex justify-center">
				<div className="w-full sm:w-1/3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 flex flex-col items-center gap-6 relative hover:shadow-red-500/30 transition-shadow duration-300">
					{/* Decorative background circle behind avatar */}
					<div className="absolute -top-6 -left-6 w-24 h-24 bg-red-100/20 rounded-full -z-10 animate-pulse"></div>

					{/* Avatar */}
					<div className="w-24 h-24 rounded-full bg-gradient-to-tr from-red-500 to-pink-500 text-white flex items-center justify-center text-4xl font-bold shadow-lg ring-4 ring-white/20">
						{user?.name ? user.name.charAt(0).toUpperCase() : "U"}
					</div>

					{/* User Info */}
					<div className="text-center space-y-1">
						<h2 className="text-xl sm:text-2xl font-extrabold text-white">
							{user?.name || "User"}
						</h2>
						<p className="text-gray-300 flex items-center justify-center gap-2 text-sm sm:text-base">
							<i className="fas fa-envelope text-red-400"></i> {user?.email}
						</p>
						<p className="text-gray-400 text-sm flex items-center justify-center gap-2">
							<i className="fas fa-id-badge text-red-400"></i> ID: {user?.id}
						</p>
					</div>

					{/* Edit Button */}
					<button
						className="mt-4 px-5 py-3 bg-gradient-to-tr from-red-500 to-pink-500 text-white rounded-xl shadow-md hover:bg-red-600 hover:shadow-lg hover:scale-105 transition transform flex items-center gap-2 text-sm sm:text-base font-medium"
						title="Edit Profile"
					>
						<i className="fas fa-edit"></i>
					</button>
				</div>
			</div>

			{/* Favourites Section */}
			<div className="mt-10">
				{/* <Outlet /> */}
				<Favourites />
			</div>
		</div>
	);
}
