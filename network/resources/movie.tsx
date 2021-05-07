import Movie from "../../models/Movie";
import TrendingTimeWindow from "../../models/TrendingTimeWindow";
import apiClient from "../apiClient";
import { API_MOVIES, API_TRENDING } from "../costants";
import Endpoint from "../endpoint";

export const getTrendingMovies = (
  timeWindow: TrendingTimeWindow
): Endpoint<Movie[]> => () => {
  const timeWindowValues = {
    [TrendingTimeWindow.Day]: "day",
    [TrendingTimeWindow.Week]: "week",
  };

  return apiClient.get(`${API_TRENDING}/movie/${timeWindowValues[timeWindow]}`);
};

export const getMovie = (id: number): Endpoint<Movie> => () =>
  apiClient.get(`${API_MOVIES}/${id}`);

export const searchMovies = (search: string): Endpoint<Movie[]> => () =>
  apiClient.get(`${API_MOVIES}?title=${search}`);
