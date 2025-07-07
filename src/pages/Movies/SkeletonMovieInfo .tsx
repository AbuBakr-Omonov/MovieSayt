import React from "react";

const SkeletonMovieInfo = () => {
  return (
    <div className="container mx-auto bg-gray-100 dark:bg-[#111111] rounded-2xl px-4 py-8 text-black dark:text-white space-y-6 animate-pulse">
      <div>
        <div className="h-6 sm:h-8 w-1/2 bg-[#e2e2e2] dark:bg-[#1d1d1d] rounded mb-4" />
        <div className="space-y-2">
          <div className="h-3 w-full bg-[#e2e2e2] dark:bg-[#1d1d1d] rounded" />
          <div className="h-3 w-5/6 bg-[#e2e2e2] dark:bg-[#1d1d1d] rounded" />
        </div>
      </div>

      <div className="bg-white dark:bg-[#111111] rounded-xl px-5 py-4 shadow-md">
        <div className="h-4 w-1/3 bg-[#e2e2e2] dark:bg-[#1d1d1d] rounded" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-[#111111] rounded-xl px-5 py-4 space-y-3 shadow-md"
          >
            <div className="h-4 w-1/3 bg-[#e2e2e2] dark:bg-[#1d1d1d] rounded" />
            <div className="h-3 w-2/3 bg-[#e2e2e2] dark:bg-[#1d1d1d] rounded" />
            <div className="h-3 w-1/2 bg-[#e2e2e2] dark:bg-[#1d1d1d] rounded" />
            <div className="h-3 w-3/4 bg-[#e2e2e2] dark:bg-[#1d1d1d] rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(SkeletonMovieInfo)
