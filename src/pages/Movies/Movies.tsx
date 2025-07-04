
import { useGenre } from "@/api/hooks/useGenre";
import { useMovie } from "@/api/hooks/useMovie";
import Genre from "@/components/genre/Genre";
import MovieView from "@/components/movieView/MovieView";
import { useParamsHook } from "@/hooks/useParamsHook";
import { Pagination } from "antd";
import React from "react";

const Movies = () => {
  const { getMovies } = useMovie();
  const { getGenres } = useGenre();

  const { getParam , setParam} = useParamsHook();
  const genre = getParam("genre");
  console.log(genre);

  const page = Number(getParam("page"))  || 1
  const hadlPagination = (value:Number)=> {
   setParam("page",value.toString())
  }
  const { data: genreData } = getGenres();
  const { data, isLoading } = getMovies({
    page,
    with_genres: genre,
    without_genres: "36,27,18,10749",
  });

  return (
    <div>
      <Genre data={genreData?.genres.slice(0, 12)} />
      <MovieView data={data?.results} loading={isLoading} count={12} />
      <div className="w-full flex justify-center mt-10">
        <div className="bg-white dark:bg-[#111111] px-6 py-4 rounded-xl shadow-md">
          <Pagination
            current={page}
            onChange={hadlPagination}
            total={data?.total_results <= 10_000 ? data?.total_results : 10_000}
            pageSize={20}
            showSizeChanger={false}
            className="
            [&_.ant-pagination-item-active]:!bg-[#C61F1F]
            [&_.ant-pagination-item-active]:!text-white
              [&_.ant-pagination-item]:!rounded-md
            dark:[&_.ant-pagination-item]:!text-gray-300
            dark:[&_.ant-pagination-item-active]:!bg-[#C61F1F]
            dark:[&_.ant-pagination-item-active]:!text-white
  "
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Movies);
