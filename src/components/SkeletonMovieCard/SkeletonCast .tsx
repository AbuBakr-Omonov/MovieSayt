import React from "react";

const SkeletonCast = () => {
  return (
    <div className="px-4 mt-[50px] mb-[50px] border-y border-y-gray-400 dark:border-t-gray-700 flex gap-4 overflow-x-auto">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="flex-shrink-0 text-center space-y-2 py-[30px] w-[100px]"
        >
          <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full mx-auto bg-gray-300 dark:bg-[#1d1d1d] animate-pulse" />

          <div className="h-3 w-3/4 mx-auto bg-gray-300 dark:bg-[#1d1d1d] rounded animate-pulse" />

          <div className="h-2 w-1/2 mx-auto bg-gray-300 dark:bg-[#1d1d1d] rounded animate-pulse" />
        </div>
      ))}
    </div>
  );
};

export default React.memo(SkeletonCast);
