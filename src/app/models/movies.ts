export interface Movies {
  results?: (ResultsEntity)[] | null;
  page: number;
  total_results: number;
  dates: Dates;
  total_pages: number;
}
export interface ResultsEntity {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids?: (number)[] | null;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}
export interface Dates {
  maximum: string;
  minimum: string;
}
