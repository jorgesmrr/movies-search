import {
  getMovieCreditsFixture,
  getMovieFixture,
  getMovieImagesFixture,
  getMovieListFixture,
} from "../__fixtures__/movie";

export const getMovie = () => () => Promise.resolve(getMovieFixture);

export const getRecommendedMovies = () => () =>
  Promise.resolve(getMovieListFixture);

export const getMovieCredits = () => () =>
  Promise.resolve(getMovieCreditsFixture);

export const getMovieImages = () => () =>
  Promise.resolve(getMovieImagesFixture);

export const getPopularMovies = () => () =>
  Promise.resolve(getMovieListFixture);

export const getTopRatedMovies = () => () =>
  Promise.resolve(getMovieListFixture);

export const getUpcomingMovies = () => () =>
  Promise.resolve(getMovieListFixture);

export const getNowPlayingMovies = () => () =>
  Promise.resolve(getMovieListFixture);
