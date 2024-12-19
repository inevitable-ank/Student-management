import React from "react";

interface PaginationProps {
  currentPage: number; // The current page number
  totalPages: number; // The total number of pages
  onPageChange: (pageNumber: number) => void; // Function to handle page changes
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center space-x-2 my-4">
      <button
        className="px-3 py-1 bg-gray-200 rounded"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`px-3 py-1 ${
            currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          } rounded`}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="px-3 py-1 bg-gray-200 rounded"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};
