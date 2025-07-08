import { useParamsHook } from "@/hooks/useParamsHook";
import type { IGenre } from "@/types";
import React, { type FC } from "react";

  const renderSkeleton = () => {
    return Array.from({ length: 12 }).map((_, idx) => (
      <div
        key={idx}
        className="px-6 py-2 bg-gray-200 dark:bg-[#333] animate-pulse rounded-full w-[80px] h-[32px]"
      ></div>
    ));
  };

interface Props {
  data: undefined | IGenre[];
}

const Genre: FC<Props> = ({ data }) => {

   const {setParam,getParam ,removeParam} = useParamsHook()
   const genre = getParam("genre")
    
   const HandlGanre = (id:number) => {
    if(genre === id.toString()){
      removeParam("genre")
    }else{
      setParam("genre",id.toString())
    }
   } 

  return (
    <div className="container mx-auto flex items-center justify-center overflow-x-auto gap-4 py-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
      {data ? data?.map((item: IGenre) => (
        <div onClick={() => HandlGanre(item.id)} key={item.id} className={`px-4 py-2 bg-gray-100 dark:bg-[#111111] text-sm rounded-full whitespace-nowrap cursor-pointer select-none hover:bg-[#C61F1F] hover:text-white transition-all duration-200  ${item.id.toString() === genre ? "bg-[#C61F1F] text-white" : "" }`}
        >
          {item.name}
        </div>
      )) : renderSkeleton() }
    </div>
  );
};

export default React.memo(Genre);
