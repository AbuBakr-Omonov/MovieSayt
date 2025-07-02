import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { useMovie } from "@/api/hooks/useMovie";
import type { IMovie } from "@/types";
import { IMAGE_URL } from "@/const";

const SwiperItem = () => {
  const { getMovies } = useMovie();
  const { data } = getMovies({ page: 1, without_genres: "18,36,27,10749" });

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

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
            <div className="h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-xl">
              <img
                src={IMAGE_URL + carusel.poster_path}
                alt={carusel.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
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
            <div className="h-[80px] md:h-[100px] rounded-lg overflow-hidden border-2 border-transparent hover:border-[#C61F1F] transition-all duration-200">
              <img
                src={IMAGE_URL + carusel.poster_path}
                alt={carusel.title}
                className="aspect-[4/3] bg-black rounded overflow-hidden flex items-center justify-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default React.memo(SwiperItem);
