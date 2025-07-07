import React from "react";

const skeletonDetail = () => {
  return (
    <>
      <div className="relative max-w-[1300px] mx-auto rounded-3xl overflow-hidden max-[768px]:px-3 max-[500px]:px-2">
        <div className="w-full h-[320px] sm:h-[380px] md:h-[450px] lg:h-[500px] bg-gray-300 dark:bg-[#1D1D1D] animate-pulse rounded-3xl max-[500px]:rounded-xl" />

        <div className="absolute inset-0 bg-gradient-to-t to-transparent z-0" />

        <div className="absolute bottom-6 left-6 right-6 text-white z-10 max-[500px]:bottom-3 max-[500px]:left-3 max-[500px]:right-3">
          <div className="w-3/4 h-4 mb-2 bg-gray-400/40 dark:bg-[#2D2D2D] rounded max-[500px]:h-3 max-[500px]:mb-2 animate-pulse" />
          <div className="w-2/3 h-3 mb-4 bg-gray-400/40 dark:bg-[#2D2D2D] rounded max-[500px]:h-2 max-[500px]:mb-2 animate-pulse" />

          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="h-8 w-[130px] max-[500px]:w-[100px] bg-gray-500/50 dark:bg-[#3A3A3A] rounded-lg animate-pulse" />
            <div className="h-5 w-[50px] bg-gray-500/40 dark:bg-[#3A3A3A] rounded animate-pulse" />
          </div>
        </div>

        <div className="absolute top-4 sm:top-6 md:top-5 left-0 right-0 px-4 sm:px-6 flex sm:flex-row sm:items-center justify-between gap-2 max-[500px]:px-2 max-[500px]:top-2">
          <div className="h-6 sm:h-8 w-2/3 bg-gray-400/40 dark:bg-[#2D2D2D] rounded animate-pulse max-[500px]:h-5" />
          <div className="flex items-center gap-2">
            <div className="w-[25px] h-[25px] bg-gray-500/40 dark:bg-[#3A3A3A] rounded-full animate-pulse max-[500px]:w-[18px] max-[500px]:h-[18px]" />
            <div className="h-4 w-[50px] bg-gray-500/40 dark:bg-[#3A3A3A] rounded animate-pulse max-[500px]:h-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(skeletonDetail);
