import React from "react";

export default function PageHeading({ 
  icon, 
  iconColor = "text-red-500", 
  title, 
  highlight 
}) {
  return (
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
  );
}
