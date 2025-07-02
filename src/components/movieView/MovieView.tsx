import { IMAGE_URL } from "@/const";
import type { IMovie } from "@/types";
import { Rate } from "antd";
import React, { type FC } from "react";
import SkeletonMovieCard from "../SkeletonMovieCard/SkeletonMovieCard";

interface Props {
  data: undefined | IMovie[];
  loading: boolean;
  count?: number;
}
const MovieView: FC<Props> = ({ data,loading, count }) => {
  return (
    <> 
      <div className="container mx-auto px-4 py-8 grid gap-5 grid-cols-4 max-[920px]:grid-cols-3 max-[640px]:grid-cols-2">
        {
          loading ? <SkeletonMovieCard count={count}/> :
         data?.map((movie: IMovie) => (
          <div
            key={movie.id}
            className="bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="w-full h-64 overflow-hidden">
              <img
                loading="lazy"
                src={IMAGE_URL + movie.poster_path}
                alt={movie.title}
                className="aspect-[3/3] bg-black rounded overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-105"
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
              <p className="flex items-center justify-between text-lg text-yellow-600 dark:text-yellow-400 font-medium">
                <Rate defaultValue={3} /> {movie.vote_average}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default React.memo(MovieView);
