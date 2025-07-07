import React, { useEffect, type FC } from "react";

interface Props {
  count?: number;
}
const SkeletonMovieCard: FC<Props> = ({ count }) => {
  useEffect(() => window.scrollTo(0, 0));
  return (
    <>
      {Array(count)
        .fill(null)
        .map((_, inx) => (
          <div
            key={inx}
            className="animate-pulse bg-white dark:bg-[#111111] rounded-xl shadow-md overflow-hidden"
          >
            <div className="w-full h-64 bg-gray-200 dark:bg-[#1D1D1D]" />
            <div className="p-4 space-y-3">
              <div className="h-4 w-3/4 bg-gray-300 dark:bg-[#1D1D1D]" />
              <div className="h-3 w-full bg-gray-300 dark:bg-[#1D1D1D]" />
              <div className="h-3 w-5/6 bg-gray-300 dark:bg-[#1D1D1D]" />
              <div className="h-4 w-1/3 bg-gray-300 dark:bg-[#1D1D1D]" />
            </div>
          </div>
        ))}
    </>
  );
};

export default React.memo(SkeletonMovieCard);
