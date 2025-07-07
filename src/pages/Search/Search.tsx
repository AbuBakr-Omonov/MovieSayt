import { useSearch } from "@/api/hooks/useSearch";
import MovieView from "@/components/movieView/MovieView";
import { Spin, Empty, Alert } from "antd";
import React, { useEffect, useState } from "react";

const Search = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  const [query, setQuery] = useState("");
  const { data, isLoading, isError } = useSearch({
    query,
    include_adult: false,
    language: "en-US",
    page: 1,
  });

  return (
    <div className="min-h-screen container mx-auto px-4 py-10 flex justify-center">
      <div className="w-full ">
        <div className=" flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-[400px] px-4 py-2 rounded-lg  border border-gray-300 dark:border-gray-400  bg-white dark:bg-[#111111] text-black dark:text-white focus:outline-none  focus:border-gray-500 dark:focus:border-gray-500    transition"  />
        </div>

        {isLoading && (
          <div className="text-center mt-6 ">
            <Spin size="large" tip="Searching movies..." />
          </div>
        )}
        {isError && (
          <div className="mt-6">
            <Alert
              message="Error"
              description="Something went wrong while fetching movies. Please try again."
              type="error"
              showIcon
            />
          </div>
        )}

        {!isLoading && data?.results?.length === 0 && query.length > 0 && (
          <div className="mt-10 text-center">
            <Empty
              description={
                <span className="text-gray-500 dark:text-gray-400 text-lg">
                  No movies found for your search.
                </span>
              }
            />
          </div>
        )}
        <div className="mt-8">
          <MovieView data={data?.results} loading={isLoading} count={10} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Search);
