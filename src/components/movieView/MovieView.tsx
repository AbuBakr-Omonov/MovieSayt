import { IMAGE_URL } from "@/const";
import type { IMovie } from "@/types";
import React, { useEffect, type FC } from "react";
import SkeletonMovieCard from "../SkeletonMovieCard/SkeletonMovieCard";
import { StarOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Bookmark } from "lucide-react";

interface Props {
  data: undefined | IMovie[];
  loading: boolean;
  count?: number;
}
const MovieView: FC<Props> = ({ data, loading, count }) => {
  useEffect(() => window.scrollTo(0, 0));
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto px-4 py-8 grid gap-5 grid-cols-4 max-[920px]:grid-cols-3 max-[640px]:grid-cols-2">
        {loading ? (
          <SkeletonMovieCard count={count} />
        ) : (
          data?.map((movie: IMovie) => (
            <div
              key={movie.id}
              className="bg-white relative dark:bg-[#111111] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="w-full  overflow-hidden">
                <img
                  onClick={() => navigate(`/MovieDetail/${movie.id}`)}
                  loading="lazy"
                  src={IMAGE_URL + movie.poster_path}
                  alt={movie.title}
                  className=" w-full h-[332px]  object-cover  aspect-[3/4] bg-[#1111] rounded overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3
                  title={movie.title}
                  className="text-lg font-semibold line-clamp-1 text-gray-900 dark:text-white max-[600px]:text-[14px]"
                >
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-1  max-[600px]:text-[10px]">
                  {movie.overview}
                </p>
                <p className="absolute  top-8 px-2 py-1 rounded-[6px] bg-yellow-500 flex  gap-1 items-center justify-between text-[12px] text-white dark:text-whhite font-medium max-[600px]:text-[10px] max-[600px]:left-1">
                  {movie.vote_average} <StarOutlined />
                </p>
                <p className="absolute top-1 py-1 px-3  rounded-[6px] bg-red-700 text-[10px] max-[600px]:text-[8px] max-[600px]:left-1">
                  {movie.release_date.split("-")[0]}
                </p>

                <p className="absolute top-1 right-2 max-[600px]:right-1 shadow-md bg-white/20 backdrop-blur-sm rounded-md p-1">
                  <Bookmark
                    className="w-5 h-5 max-[600px]:w-3 max-[600px]:h-3 text-white"
                    strokeWidth={2}
                  />
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default React.memo(MovieView);
