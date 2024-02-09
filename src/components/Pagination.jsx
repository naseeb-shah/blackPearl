import React, { useState } from "react";

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const showPages = 2;

    for (
      let i = Math.max(1, currentPage - showPages);
      i <= Math.min(totalPages, currentPage + showPages);
      i++
    ) {
      pageNumbers.push(
        <button
          key={i}
          className={`mx-1 px-3 py-2 rounded focus:outline-none ${
            currentPage === i
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex  bottom-0 items-center justify-center  my-4 p-2">
      {currentPage > 1 && (
        <button
          className="mx-1 px-3 py-2 rounded-l focus:outline-none bg-white text-gray-800"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
      )}

      {currentPage > 3 && <span className="mx-1 px-3 py-2">...</span>}

      {renderPageNumbers()}

      {currentPage < totalPages - 2 && (
        <span className="mx-1 px-3 py-2">...</span>
      )}

      {currentPage < totalPages && (
        <button
          className="mx-1 px-3 py-2 rounded-r focus:outline-none bg-white text-gray-800"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
