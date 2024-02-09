import React from "react";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white border border-gray-300 p-8 rounded shadow-md max-w-sm w-full">
        <h1 className="text-4xl font-bold mb-4 text-red-600">Error 404</h1>
        <p className="text-gray-600 mb-8">
          Page not found. The requested page does not exist.
        </p>
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
