import {
  getMovieFixture,
  getSearchMoviesFixture,
  getTrendingMoviesFixture,
} from "../__fixtures__/movie";

export const getMovie = () => () => Promise.resolve(getMovieFixture);

export const getTrendingMovies = () => () => {
  return Promise.resolve(getTrendingMoviesFixture);
};

export const searchMovies = () => () => {
  return Promise.resolve(getSearchMoviesFixture);
};
