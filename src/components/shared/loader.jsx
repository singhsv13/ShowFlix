import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="flex space-x-3">
        <span className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-bounce"></span>
        <span className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-bounce [animation-delay:-0.2s]"></span>
        <span className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-bounce [animation-delay:-0.4s]"></span>
      </div>
    </div>
  );
}
