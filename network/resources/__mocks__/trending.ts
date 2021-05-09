import { getTrendingMoviesFixture } from "../__fixtures__/trending";

export const getTrendingMovies = () => () => {
  return Promise.resolve(getTrendingMoviesFixture);
};
