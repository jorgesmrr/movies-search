import TrendingTimeWindow from "../../../models/TrendingTimeWindow";
import {
  weekTrendingMovies,
  dayTrendingMovies,
  searchableMovies,
  allMovies,
} from "../__fixtures__/movie";

export const getTrendingMovies = (timeWindow: TrendingTimeWindow) => () => {
  const sortMap = {
    [TrendingTimeWindow.Day]: dayTrendingMovies,
    [TrendingTimeWindow.Week]: weekTrendingMovies,
  };

  return Promise.resolve(sortMap[timeWindow]);
};

export const getMovie = (id: number) => () =>
  Promise.resolve(allMovies.find((movie) => movie.id === id));

export const searchMovies = (query: string) => () => {
  return Promise.resolve(searchableMovies);
};
