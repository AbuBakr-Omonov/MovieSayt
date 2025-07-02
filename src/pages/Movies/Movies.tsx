import { useGenre } from "@/api/hooks/useGenre";
import { useMovie } from "@/api/hooks/useMovie";
import Genre from "@/components/genre/Genre";
import MovieView from "@/components/movieView/MovieView";
import { Pagination } from "antd";
import React, { useState } from "react";

const Movies = () => {
  const [page, setPage] = useState(1);

  const { getMovies } = useMovie();
  const { getGenres } = useGenre();

  const { data: genreData } = getGenres();
  const { data, isLoading } = getMovies({page, without_genres: "18,36,27,10749" });

  console.log(data);

  return (
    <div>
      <Genre data={genreData?.genres.slice(0,11)} />
      <MovieView data={data?.results} loading={isLoading} count={12} />
      <div className="w-full flex justify-center mt-10">
        <div className="bg-white dark:bg-slate-800 px-6 py-4 rounded-xl shadow-md">
          <Pagination
            current={page}
            onChange={(pageNumber) => setPage(pageNumber)}
            total={data?.total_results || 500}
            pageSize={20}
            showSizeChanger={false}
            className=" [&_.ant-pagination-item-active]:!bg-[#ff6b6b]  [&_.ant-pagination-item-active]:!text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Movies);
