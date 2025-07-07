export interface IMovie{
    id: number,
    title: string,
    backdrop_path: string,
    poster_path: string,
    vote_average: number
    overview:string
    release_date:string
}
export interface IGenre {
    id: number,
    name: string
}

export interface SearchParams {
  query: string;
  include_adult?: boolean;
  language?: string;
  primary_release_year?: string;
  page?: number;
  region?: string;
  year?: string;
}
export type TMovieImage = {
  aspect_ratio: number;
  file_path: string;
  height: number;
  width: number;
  iso_639_1: string | null; 
  vote_average: number;
  vote_count: number;
};
export type TPersonDetail = {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string | null;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string | null;
  popularity: number;
  profile_path: string | undefined;
};

