import Movie from "../../models/Movie";
import PagedResponse from "../../models/PagedResponse";
import TrendingTimeWindow from "../../models/TrendingTimeWindow";
import apiClient from "../apiClient";
import { API_MOVIES, API_SEARCH_MOVIES, API_TRENDING } from "../costants";
import Endpoint from "../endpoint";

export const getMovie = (id: number): Endpoint<Movie> => () =>
  new Promise((resolve, reject) => {
    apiClient
      .get(`${API_MOVIES}/${id}`)
      .then((response) => resolve(response.data))
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
      .then((response) => resolve(response.data))
      .catch(reject);
  });
};

export const searchMovies = (
  query: string
): Endpoint<PagedResponse<Movie>> => () =>
  new Promise((resolve, reject) => {
    apiClient
      .get(`${API_SEARCH_MOVIES}?query=${encodeURI(query)}`)
      .then((response) => resolve(response.data))
      .catch(reject);
  });
