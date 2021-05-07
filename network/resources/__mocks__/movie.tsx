import TrendingTimeWindow from "../../../models/TrendingTimeWindow";
import { mockResponsePage } from "../../../utils/testing";
import {
  weekTrendingMovies,
  dayTrendingMovies,
  searchableMovies,
  allMovies,
} from "../__fixtures__/movie";

export const getMovie = (id: number) => () =>
  Promise.resolve(allMovies.find((movie) => movie.id === id));

export const getTrendingMovies = (timeWindow: TrendingTimeWindow) => () => {
  const timeWindowValues = {
    [TrendingTimeWindow.Day]: dayTrendingMovies,
    [TrendingTimeWindow.Week]: weekTrendingMovies,
  };

  return Promise.resolve(mockResponsePage(timeWindowValues[timeWindow]));
};

export const searchMovies = (query: string) => () => {
  return Promise.resolve(mockResponsePage(searchableMovies));
};
