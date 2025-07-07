import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const SkeletonSwiperItem = () => {
  const skeletonArray = new Array(4).fill(null); 

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-6">
      <Swiper spaceBetween={10} className="rounded-xl mb-4">
        {skeletonArray.map((_, idx) => (
          <SwiperSlide key={idx}>
            <div className="h-[400px] md:h-[500px] lg:h-[600px] w-full bg-gray-200 dark:bg-[#1D1D1D] animate-pulse rounded-xl shadow-md" />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        className="max-w-[800px] mx-auto"
      >
        {skeletonArray.map((_, idx) => (
          <SwiperSlide key={idx}>
            <div className="h-[70px] md:h-[90px] w-full bg-gray-200 dark:bg-[#1D1D1D] animate-pulse rounded-lg shadow-sm" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default React.memo(SkeletonSwiperItem);
