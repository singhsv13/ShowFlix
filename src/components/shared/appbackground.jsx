import React from "react";

export default function AppBackground({ children }) {
	return (
		<div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-red-900">
			{/* Background glow blobs */}
			<div className="absolute -top-20 -left-20 w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
			<div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

			{/* Page Content */}
			<div className="relative z-10">{children}</div>
		</div>
	);
}
