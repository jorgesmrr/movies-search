import parse from "date-fns/parse";
import Movie from "../../models/Movie";
import PagedResponse from "../../models/PagedResponse";
import TrendingTimeWindow from "../../models/TrendingTimeWindow";
import apiClient from "../apiClient";
import { API_MOVIES, API_SEARCH_MOVIES, API_TRENDING } from "../costants";
import Endpoint from "../endpoint";

export const movieTransformer: (responseData: any) => Movie = (
  responseData
) => ({
  id: responseData.id,
  title: responseData.title,

  poster: responseData.poster_path,
  backdrop: responseData.backdrop_path,

  isAdult: responseData.adult,
  genres: responseData.genres || [],
  language: responseData.original_language,
  releaseDate: parse(responseData.release_date, "yyyy-MM-dd", new Date()),
  runtime: responseData.runtime,

  tagline: responseData.tagline,
  overview: responseData.overview,

  imdbId: responseData.imdb_id,
});

export const getMovie = (id: string): Endpoint<Movie> => () =>
  new Promise((resolve, reject) => {
    apiClient
      .get(`${API_MOVIES}/${id}`)
      .then((response) => resolve(movieTransformer(response.data)))
      .catch(reject);
  });

export const getTrendingMovies = (
  timeWindow: TrendingTimeWindow
): Endpoint<PagedResponse<Movie>> => () => {
  const timeWindowValues = {
    [TrendingTimeWindow.Day]: "day",
    [TrendingTimeWindow.Week]: "week",
  };

  return new Promise((resolve, reject) => {
    apiClient
      .get(`${API_TRENDING}/movie/${timeWindowValues[timeWindow]}`)
      .then((response) => {
        response.data.results = response.data.results.map(movieTransformer);
        resolve(response.data);
      })
      .catch(reject);
  });
};

export const searchMovies = (
  query: string
): Endpoint<PagedResponse<Movie>> => () =>
  new Promise((resolve, reject) => {
    apiClient
      .get(`${API_SEARCH_MOVIES}?query=${encodeURI(query)}`)
      .then((response) => {
        response.data.results = response.data.results.map(movieTransformer);
        resolve(response.data);
      })
      .catch(reject);
  });
