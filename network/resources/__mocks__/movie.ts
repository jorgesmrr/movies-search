import { getMovieFixture, getMovieListFixture } from "../__fixtures__/movie";

export const getMovie = () => () => Promise.resolve(getMovieFixture);

export const getPopularMovies = () => () =>
  Promise.resolve(getMovieListFixture);

export const getTopRatedMovies = () => () =>
  Promise.resolve(getMovieListFixture);

export const getUpcomingMovies = () => () =>
  Promise.resolve(getMovieListFixture);

export const getNowPlayingMovies = () => () =>
  Promise.resolve(getMovieListFixture);
