import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { useMovie } from "@/api/hooks/useMovie";
import type { IMovie } from "@/types";
import { IMAGE_URL } from "@/const";
import { useNavigate } from "react-router-dom";

const SwiperItem = () => {
  const { getMovies } = useMovie();
  const { data } = getMovies({ page: 1, without_genres: "18,36,27,10749" });

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
   const navigate = useNavigate()
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
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-xl group">
              <img
                src={IMAGE_URL + carusel.backdrop_path}
                alt={carusel.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <h2 className="  opacity-60 text-2xl  md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg">
                  {carusel.title}
                   <span className="text-[20px] text-red-600">-{carusel.release_date.split("-")[0]}</span>
                </h2>
                 
                <p className="opacity-50 hidden md:block text-sm md:text-base lg:text-lg max-w-2xl text-gray-200 mb-4 line-clamp-2">
                  {carusel.overview}
                </p>
                <button onClick={()=> navigate(`/MovieDetail/${carusel.id}`)} className="bg-[#C61F1F] hover:bg-[#a91919] transition-colors px-5 py-2 rounded-lg text-sm font-semibold">
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
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {data?.results?.map((carusel: IMovie) => (
          <SwiperSlide key={carusel.id}>
            <div className="h-[80px]  md:h-[100px] rounded-lg overflow-hidden border-2 border-transparent hover:border-[#C61F1F] transition-all duration-200">
              <img
                src={IMAGE_URL + carusel.backdrop_path}
                alt={carusel.title}
                className="aspect-[4/2] bg-black rounded overflow-hidden flex items-center justify-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default React.memo(SwiperItem);
