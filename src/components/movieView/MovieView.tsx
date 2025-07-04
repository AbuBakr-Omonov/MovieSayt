import { IMAGE_URL } from "@/const";
import type { IMovie } from "@/types";
import React, { type FC } from "react";
import SkeletonMovieCard from "../SkeletonMovieCard/SkeletonMovieCard";
import { StarOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface Props {
  data: undefined | IMovie[];
  loading: boolean;
  count?: number;
}
const MovieView: FC<Props> = ({ data,loading, count }) => {

  const navigate = useNavigate()
  return (
    <> 
      <div className="container mx-auto px-4 py-8 grid gap-5 grid-cols-4 max-[920px]:grid-cols-3 max-[640px]:grid-cols-2">
        {
          loading ? <SkeletonMovieCard count={count}/> :
         data?.map((movie: IMovie) => (
          <div
            key={movie.id}
            className="bg-white relative dark:bg-[#111111] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="w-full  overflow-hidden">
              <img
                onClick={()=> navigate(`/MovieDetail/${movie.id}`)}
                loading="lazy"
                src={IMAGE_URL + movie.poster_path}
                alt={movie.title}
                className=" w-full h-[332px]  object-cover  aspect-[3/4] bg-[#1111] rounded overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 space-y-2">
              <h3
                title={movie.title}
                className="text-lg font-semibold line-clamp-1 text-gray-900 dark:text-white"
              >
                {movie.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                {movie.overview}
              </p>
              <p className="absolute  top-8 px-2 py-1 rounded-[6px] bg-yellow-500 flex  gap-1 items-center justify-between text-[12px] text-white dark:text-whhite font-medium">
                  {movie.vote_average} <StarOutlined/> 
              </p>
               <p className="absolute top-1 py-1 px-3  rounded-[6px] bg-red-700 text-[10px]">{movie.release_date.split("-")[0]}</p>
               
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default React.memo(MovieView);
