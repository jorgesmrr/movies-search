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

  return Promise.resolve({ data: sortMap[timeWindow] });
};

export const getMovie = (id: number) => () =>
  Promise.resolve({ data: allMovies.find((movie) => movie.id === id) });

export const searchMovies = (search: string) => () => {
  return Promise.resolve({ data: searchableMovies });
};
