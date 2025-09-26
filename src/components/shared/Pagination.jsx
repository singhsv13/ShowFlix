import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-10">
      <nav className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-xl shadow-2xl rounded-3xl px-4 py-3">
        {/* Prev button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 rounded-full transition flex items-center justify-center
            ${
              currentPage === 1
                ? "text-gray-500 cursor-not-allowed"
                : "text-red-500 hover:bg-red-500/20"
            }`}
          title="Previous"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-2">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition
                ${
                  currentPage === page
                    ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-300 hover:bg-red-500/20"
                }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full transition flex items-center justify-center
            ${
              currentPage === totalPages
                ? "text-gray-500 cursor-not-allowed"
                : "text-red-500 hover:bg-red-500/20"
            }`}
          title="Next"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </nav>
    </div>
  );
}
