import React from "react";

const SkeletonScenes = () => {
  return (
    <div className="my-[30px] border-t border-t-gray-400 dark:border-t-gray-700 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 py-6">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="bg-[#f3f3f3] dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-sm animate-pulse"
        >
          <div className="w-full h-[160px] bg-[#e2e2e2] dark:bg-[#1d1d1d]" />

          <div className="flex items-center justify-between px-3 py-2 text-[13px]">
            <div className="h-3 w-14 rounded bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-3 w-10 rounded bg-gray-300 dark:bg-gray-600"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(SkeletonScenes);
