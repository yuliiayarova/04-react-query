import axios, { type AxiosRequestConfig } from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/";
axios.defaults.baseURL = BASE_URL;

const endpoint = "search/movie";

const myApiKey = import.meta.env.VITE_TMDB_TOKEN;

interface MoviesResponse {
  results: Movie[];
  page: number;
  total_pages: number;
}

export default async function fetchMovies(
  query: string,
  page: number,
): Promise<MoviesResponse> {
  const config: AxiosRequestConfig = {
    params: { query, page },
    headers: {
      Authorization: `Bearer ${myApiKey}`,
    },
  };

  const response = await axios.get<MoviesResponse>(endpoint, config);
  return response.data;
}
