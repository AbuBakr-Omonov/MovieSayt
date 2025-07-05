import { useMovie } from "@/api/hooks/useMovie";
import MovieView from "@/components/movieView/MovieView";
import { IMAGE_URL } from "@/const";
import type { TMovieImage } from "@/types";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "@/assets/vite.svg";
import { RightOutlined } from "@ant-design/icons";
//
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
/////
const MovieDetail = () => {
  const { id } = useParams();
  const { getMovieSingle, getMovieDetail } = useMovie();
  const { data } = getMovieSingle(id || "");
  const { data: similarData, isLoading } = getMovieDetail(id || "", "similar");
  const { data: imagesData } = getMovieDetail(id || "", "images");
  const { data: creditsData } = getMovieDetail(id || "", "credits");
  // console.log(similarData.results);
  // console.log(data);
  const navigate = useNavigate();
  return (
    <>
      <div className="rounded-3xl rounded-b-3xl relative max-w-[1300px] mx-auto  max-[768px]:px-3 max-[500px]:px-2">
        <img
          className="rounded-3xl  w-full h-auto object-cover max-[500px]:rounded-xl"
          src={IMAGE_URL + data?.backdrop_path}
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white z-10 max-[500px]:bottom-3 max-[500px]:left-3 max-[500px]:right-3">
          <p className="opacity-50 md:block text-sm md:text-base lg:text-lg max-w-2xl text-gray-200 mb-4 line-clamp-2 max-[500px]:text-xs max-[500px]:mb-2">
            {data?.overview}
          </p>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <button className="bg-[#C61F1F] hover:bg-[#a91919] transition-colors px-5 py-2 rounded-lg text-sm font-semibold max-[500px]:px-3 max-[500px]:py-1 max-[500px]:text-xs">
              Add to wishlist
            </button>
            <span className="text-[20px] text-red-600 max-[500px]:text-sm">
              {data?.release_date.split("-")[0]}
            </span>
          </div>
        </div>

        <div className="absolute top-4 sm:top-6 md:top-5 left-0 right-0 px-4 sm:px-6 flex sm:flex-row sm:items-center justify-between gap-2 max-[500px]:px-2 max-[500px]:top-2">
          <p className="text-2xl sm:text-3xl md:text-4xl text-white font-bold max-[500px]:text-lg max-[400px]:text-base">
            {data?.title}
          </p>
          <div className="flex items-center gap-2">
            <img
              className="w-[20px] sm:w-[25px] max-[500px]:w-[18px]"
              src={logo}
              alt="logo"
            />
            <span className="text-white font-Ax text-sm sm:text-base max-[500px]:text-xs">
              movie
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto ">
        <div className="mt-[20px]">
          <p className=" font-Ax ml-[17px] text-black dark:text-white ">
            Scenes <RightOutlined style={{ fontSize: "16px", color: "#fff" }} />
          </p>
        </div>
        <div className=" my-[30px] border-t border-t-gray-400 dark:border-t-gray-700 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 py-6">
          {imagesData?.backdrops
            ?.slice(0, 5)
            ?.map((item: TMovieImage, inx: number) => (
              <div
                key={inx}
                className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out"
              >
                <img
                  src={IMAGE_URL + item?.file_path}
                  alt={`Backdrop ${inx}`}
                  className="w-full h-[160px] object-cover"
                />

                <div className="flex items-center justify-between px-3 py-2 text-[13px] text-gray-300">
                  <span>
                    {item.width}×{item.height}
                  </span>
                  <span>★ {item.vote_average.toFixed(1)}</span>
                </div>
              </div>
            ))}
        </div>
        <div className="">
          <p className=" font-Ax ml-[17px] text-black dark:text-white ">
            Cast & crew{" "}
            <RightOutlined style={{ fontSize: "16px", color: "#fff" }} />
          </p>
        </div>
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          freeMode={true}
          modules={[FreeMode]}
          className="px-4 b  mt-[50px] mb-[50px] border-y border-y-gray-400 dark:border-t-gray-700 "
        >
          {creditsData?.cast?.slice(0, 50)?.map((person: any) => (
            <SwiperSlide
              key={person?.id}
              style={{ width: "100px" }}
              className="text-center text-sm text-white space-y-1 py-[30px]"
            >
              <img
                onClick={() => navigate(`/personDeatil/${person.id}`)}
                src={
                  person?.profile_path
                    ? IMAGE_URL + person.profile_path
                    : "https://avatars.mds.yandex.net/i?id=bc191175c76b8822e8ce5a4c87ea0768d98eff5c-5091797-images-thumbs&n=13"
                }
                alt={person?.original_name}
                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full object-cover mx-auto shadow-md border border-gray-500"
              />
              <h3 className="font-semibold text-[12px] sm:text-sm truncate">
                {person?.original_name}
              </h3>
              <p className="text-gray-400 text-[11px] sm:text-xs truncate">
                {person?.character}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <MovieView
        data={similarData?.results?.slice(0, 8)}
        loading={isLoading}
        count={8}
      />

      <div className="container mx-auto bg-gray-100 dark:bg-[#111111]  rounded-2xl px-4 py-8 text-black dark:text-white space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">{data?.title}</h1>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {data?.overview}
          </p>
        </div>

        {data?.tagline && (
          <div className="bg-white dark:bg-[#111111] rounded-xl px-5 py-4 shadow-md">
            <p className="text-sm sm:text-base italic text-gray-600 dark:text-gray-400">
              “{data?.tagline}”
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="bg-white dark:bg-[#111111] rounded-xl px-5 py-4 space-y-2 shadow-md">
            <h3 className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Information
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Released:</span>{" "}
              {data?.release_date?.split("-")[0]}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Rated:</span> {data?.status}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Origin:</span>{" "}
              {data?.origin_country?.[0]}
            </p>
          </div>

          <div className="bg-white dark:bg-[#111111] rounded-xl px-5 py-4 space-y-2 shadow-md">
            <h3 className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Language
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Original:</span>{" "}
              {data?.original_language?.toUpperCase()}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Audio:</span>{" "}
              {data?.spoken_languages?.[0]?.english_name}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-medium">Subtitles:</span> English
            </p>
          </div>
          <div className="bg-white dark:bg-[#111111] rounded-xl px-5 py-4 space-y-2 shadow-md">
            <h3 className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Accessibility
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              CC (Closed Caption)
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AD (Audio Description)
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Subtitles available
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(MovieDetail);
