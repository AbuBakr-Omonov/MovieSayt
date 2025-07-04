import { usePerson } from "@/api/hooks/usePerson";
import MovieView from "@/components/movieView/MovieView";
import { IMAGE_URL } from "@/const";
import React from "react";
import { useParams } from "react-router-dom";

const PersonDetail = () => {
  const { id } = useParams();
  const { getPerson, getMovieCredits } = usePerson();
  const { data } = getPerson(id || "");
  const { data: creditsData, isLoading } = getMovieCredits(id || "", "credits");
  console.log(creditsData);

  return (
    <>
      <div className="container mx-auto">
        <div className=" px-4 py-10 text-black dark:text-white">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-[#f5f5f5] dark:bg-[#111] rounded-2xl p-6 shadow-lg">
            <div className="flex-shrink-0">
              <img
                src={
                  data?.profile_path
                    ? IMAGE_URL + data.profile_path
                    : "https://avatars.mds.yandex.net/i?id=bc191175c76b8822e8ce5a4c87ea0768d98eff5c-5091797-images-thumbs&n=13"
                }
                alt={data?.name}
                className="w-[160px] h-[160px] rounded-full object-cover border-2 border-gray-500 shadow-md mx-auto md:mx-0"
              />
            </div>

            <div className="flex-1 space-y-4 text-center max-[640px]:text-center md:text-left">
              <h2 className="text-2xl font-semibold text-black dark:text-white">
                {data?.name}
              </h2>

              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line max-[640px]:text-justify">
                {data?.biography?.slice(0,600) || "Biography not available."}
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="ml-[20px] font-Ax text-[25px] dark:text-white">Movies</p>
        </div>
        <MovieView
          data={creditsData?.cast?.slice(0, 8)}
          loading={isLoading}
          count={12}
        />

         <div>
          <p className="ml-[20px] font-Ax text-[25px] dark:text-white">Movies && crew</p>
        </div>
        <MovieView
          data={creditsData?.crew?.slice(0, 4)}
          loading={isLoading}
          count={12}
        />
      </div>
    </>
  );
};

export default React.memo(PersonDetail);
