import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-neutral-900 px-4">
      {/* <SearchOff className="w-24 h-24 text-gray-400 dark:text-gray-500 mb-6" /> */}
      <h1 className="text-4xl font-bold text-red-500 mb-2">
        404 — Page Not Found
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default React.memo(NotFound);
