import React from "react";

export default function PageHeading({
	icon,
	iconColor = "text-red-500",
	title,
	highlight,
  description = "",
}) {
	return (
		<>
			<div className="flex items-center justify-center gap-3 my-8">
				{/* Icon */}
				<i className={`fas ${icon} ${iconColor} text-2xl`}></i>

				{/* Title */}
				<h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center">
					{title}{" "}
					<span className="bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">
						{highlight}
					</span>
				</h2>
			</div>
			<p className="text-gray-300 text-center max-w-2xl mx-auto text-base sm:text-lg">
				{/* Description goes here */}
        {description}
			</p>
		</>
	);
}
