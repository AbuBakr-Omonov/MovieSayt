import type { IGenre } from "@/types";
import React, { type FC } from "react";

interface Props {
  data: undefined | IGenre[];
}

const Genre: FC<Props> = ({ data }) => {
  return (
    <div className=" container mx-auto flex items-center justify-center overflow-x-auto gap-4 py-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
      {data?.map((item: IGenre) => (
        <div
          key={item.id}
          className="px-4 py-2 bg-gray-100 dark:bg-slate-800 text-sm rounded-full whitespace-nowrap cursor-pointer hover:bg-[#C61F1F] hover:text-white transition-all duration-200"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Genre);
