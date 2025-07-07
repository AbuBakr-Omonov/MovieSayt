import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { useMovie } from "@/api/hooks/useMovie";
import type { IMovie } from "@/types";
import { IMAGE_URL } from "@/const";
import { useNavigate } from "react-router-dom";
import SkeletonSwiperItem from "../SkeletonMovieCard/SkeletonSwiperItem";

const SwiperItem = () => {
  useEffect(() => window.scrollTo(0, 0));
  const { getMovies } = useMovie();
  const { data, isLoading } = getMovies({
    page: 1,
    without_genres: "18,36,27,10749",
  });

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const navigate = useNavigate();

  if (isLoading || !data?.results) {
    return <SkeletonSwiperItem />;
  }
  return (
    <div className="max-w-[1300px] mx-auto px-4 py-6">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#C61F1F",
            "--swiper-pagination-color": "#C61F1F",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="rounded-xl mb-4"
      >
        {data?.results?.map((carusel: IMovie) => (
          <SwiperSlide key={carusel.id}>
            <div className="relative h-[280px] sm:h-[360px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-xl group">
              <img
                src={IMAGE_URL + carusel.backdrop_path}
                alt={carusel.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 right-4 sm:right-6 text-white z-10">
                <h2 className="opacity-60 text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg leading-snug">
                  {carusel.title}
                  <span className="text-sm sm:text-base md:text-xl text-red-600 ml-2">
                    -{carusel.release_date.split("-")[0]}
                  </span>
                </h2>

                <p className="opacity-50 hidden sm:block text-sm sm:text-base md:text-lg max-w-2xl text-gray-200 mb-4 line-clamp-2">
                  {carusel.overview}
                </p>

                <button
                  onClick={() => navigate(`/MovieDetail/${carusel.id}`)}
                  className="bg-[#C61F1F] hover:bg-[#a91919] transition-colors px-4 sm:px-5 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-semibold"
                >
                  View Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper max-w-[800px] mx-auto"
        
        breakpoints={{
          0: {
            slidesPerView: 2.2,
          },
          480: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
   
        }}
      >
        {data?.results?.map((carusel: IMovie) => (
          <SwiperSlide key={carusel.id}>
            <div className="h-[80px]   rounded-lg overflow-hidden border-2 border-transparent  transition-all duration-200">
              <img
                src={IMAGE_URL + carusel.backdrop_path}
                alt={carusel.title}
                className="aspect-[4/2] cursor-pointer opacity-60  hover:opacity-100 border-blue-500  bg-black rounded overflow-hidden md:object-cover flex items-center justify-center hover:scale-100 duration-150 ease-out"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default React.memo(SwiperItem);
