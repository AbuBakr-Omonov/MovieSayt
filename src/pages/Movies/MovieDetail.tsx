import { useMovie } from "@/api/hooks/useMovie";
import MovieView from "@/components/movieView/MovieView";
import { IMAGE_URL } from "@/const";
import type { TMovieImage } from "@/types";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "@/assets/vite.svg";
import { Button } from "antd";
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
  const navigate = useNavigate()
  return (
    <>
      <div className="relative max-w-[1300px] mx-auto px-4">
        <img
          className="rounded-3xl w-full h-auto object-cover "
          src={IMAGE_URL + data?.backdrop_path}
          alt=""
        />

        <div className="absolute top-4 sm:top-6 md:top-10 left-0 right-0 px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">
            {data?.title}
          </p>
          <div className="flex items-center gap-2">
            <img className="w-[20px] sm:w-[25px]" src={logo} alt="logo" />
            <span className="text-white font-Ax text-sm sm:text-base">
              movie
            </span>
          </div>
        </div>
      </div>
      <div className="relative z-10 -mt-16 sm:-mt-24 md:-mt-36 max-w-[1300px] mx-auto px-4 max-[640px]:-mt-48">
        <div className="bg-gradient-to-t from-[#353434] via-[#2b2727] to-transparent rounded-3xl p-4 sm:p-6 md:p-10 text-white w-full overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1 space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start">
                <Button
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-[10px] text-sm sm:text-[14px] font-medium sm:font-semibold "
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "6px",
                    border: "1px solid white",
                    whiteSpace: "nowrap",
                  }}
                >
                  Accept Free Trial
                </Button>

                <Button
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-[10px] text-sm sm:text-[14px] font-normal sm:font-medium"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "6px",
                    whiteSpace: "nowrap",
                  }}
                >
                  + Add to Watchlist
                </Button>
              </div>

              <p className="text-gray-300 text-sm sm:text-[15px] leading-relaxed">
                {data?.overview}
              </p>
            </div>
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
