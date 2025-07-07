import { useQuery } from "@tanstack/react-query";
import { api } from "..";
import type { SearchParams } from "@/types";

export const useSearch = (params: SearchParams) => {
  return useQuery({
    queryKey: ["search", params],
    queryFn: () =>
      api.get("/search/movie", { params }).then((res) => res.data),
    //  enabled: !!params.query, 
  });
};
